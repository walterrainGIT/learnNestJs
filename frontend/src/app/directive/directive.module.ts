import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './components/directive.component';



@NgModule({
  imports: [CommonModule],
  exports: [DirectiveComponent],
  declarations: [DirectiveComponent]
})
export class DirectiveModule { }
