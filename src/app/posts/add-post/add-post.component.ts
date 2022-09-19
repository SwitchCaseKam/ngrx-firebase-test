import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { PostUpdateService } from '../services/post-update.service';
import { add, update } from '../state/posts.actions';
import { Post } from '../state/posts.state';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public addPostForm: FormGroup;
  public shouldDisplayUpdateButton = false;
  private id: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private postUpdateService: PostUpdateService
  ) {
    this.addPostForm = this.createAddPostFormGroup();
  }

  public ngOnInit(): void {
    this.postUpdateService.post.subscribe(
      p => {
        this.id = p.id;
        this.addPostForm.patchValue(p);
        this.shouldDisplayUpdateButton = !this.shouldDisplayUpdateButton;
      }
    );
  }

  private createAddPostFormGroup(): FormGroup {
    return this.formBuilder.group({
      author: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required],
    })
  }

  public addPost(): void {
    const newPost = this.addPostForm.value as Post;
    this.store.dispatch(add({post: newPost}));
    this.addPostForm.reset()
  }

  public updatePost(): void {
    const updatedPost = this.addPostForm.value as Post;
    updatedPost.id = this.id;
    this.store.dispatch(update({post: updatedPost}));
    this.addPostForm.reset();
    this.shouldDisplayUpdateButton = !this.shouldDisplayUpdateButton;
  }

  public cancelUpdatePost() {
    this.addPostForm.reset();
    this.shouldDisplayUpdateButton = !this.shouldDisplayUpdateButton;
  }


}
