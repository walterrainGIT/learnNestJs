import { Component, OnInit } from '@angular/core';
import {Post, PostService} from "../../services/post.service";
import {Observable} from "rxjs";

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})

export class PostListComponent implements OnInit{
  public posts$?: Observable<Post[]>;
  constructor(private postService: PostService) {}
  ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }
}
