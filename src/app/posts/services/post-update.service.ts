import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../state/posts.state';

@Injectable({
  providedIn: 'root'
})
export class PostUpdateService {

  public post = new Subject<Post>()

  constructor() { }

  public setPostToUpdate(post: Post): void {
    this.post.next(post);
  }
}
