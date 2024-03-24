import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostItemComponent} from "./components/post-item/post-item.component";
import {PostListComponent} from "./components/post-list/post-list.component";

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRouting { }
