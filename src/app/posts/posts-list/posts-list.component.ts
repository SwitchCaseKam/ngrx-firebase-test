import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectAllPosts } from 'src/app/store';
import { Post } from '../state/posts.state';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  protected posts: Observable<Post[]>;

  constructor(private store: Store<AppState>) { 
    this.posts = this.store.select(selectAllPosts);
  }

  ngOnInit(): void {
  }

}
