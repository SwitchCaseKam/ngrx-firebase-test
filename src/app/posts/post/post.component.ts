import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { PostUpdateService } from '../services/post-update.service';
import { remove, update } from '../state/posts.actions';
import { Post } from '../state/posts.state';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post = {id: 0, author: '', title: '', content: ''};

  constructor(private store: Store<AppState>, private postUpdateService: PostUpdateService) {}

  ngOnInit(): void {
  }

  public remove(): void {
    if(confirm(`are you sure to delete post ${this.post.id}?`)) {
      this.store.dispatch(remove({index: this.post.id}));
    }
  }

  public update(): void {
    this.postUpdateService.setPostToUpdate(this.post);
  }
}
