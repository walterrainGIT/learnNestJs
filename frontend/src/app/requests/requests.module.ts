import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import {RequestRouting} from "./requests-routings.module";
import {PostService} from "./services/post.service";
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    PostListComponent,
    PostItemComponent
  ],
  imports: [
    CommonModule,
    RequestRouting,
    HttpClientModule,
  ],
  providers: [PostService],
})
export class RequestsModule { }
