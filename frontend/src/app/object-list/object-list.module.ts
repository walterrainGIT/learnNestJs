import { NgModule } from '@angular/core';
import {ObjectListComponent} from "./component/object-list.component";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [ObjectListComponent],
  imports: [BrowserModule],
  exports: [ObjectListComponent]
})
export class ObjectListModule { }
