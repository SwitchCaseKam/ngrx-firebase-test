import { Component, OnInit } from '@angular/core';
import { Post } from '../state/posts.state';

@Component({
  selector: 'app-posts-output',
  templateUrl: './posts-output.component.html',
  styleUrls: ['./posts-output.component.css']
})
export class PostsOutputComponent implements OnInit {

  protected shouldUpdatePost = false;


  constructor() { }

  ngOnInit(): void {
  }


}
