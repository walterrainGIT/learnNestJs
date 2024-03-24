import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Post, PostService} from "../../services/post.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})

export class PostListComponent implements OnInit{
  public posts$?: Observable<Post[]>;
  constructor(private postService: PostService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }

  public redirectTo(id: number) {
    this.router.navigate([`postItem/${id}`], { relativeTo: this.route })
  }
}
