import {AfterContentInit, Component} from '@angular/core';
import {Observable} from "rxjs";
import {Comment, PostService} from "../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'post-item',
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.scss'
})

export class PostItemComponent implements AfterContentInit{
  public comments$?: Observable<Comment[]>;
  constructor(private postService: PostService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngAfterContentInit() {
    this.comments$ = this.postService.getComment(parseInt((window.location.pathname).split('/')[3]));
  }

  public redirectTo() {
    this.router.navigate([`../../`], { relativeTo: this.route })
  }
}
