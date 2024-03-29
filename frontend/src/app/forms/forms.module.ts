import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './components/forms.component';
import {FormsRouting} from "./forms-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    FormsRouting,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
