import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './components/directive.component';
import {CustomChangeColorDirective} from "./customDirective/custom-changeColor.directive";
import { CustomIfDirective } from './customDirective/custom-if.directive';
import { DirectivesRouting } from './directive-routings.module';

@NgModule({
  declarations: [DirectiveComponent, CustomChangeColorDirective, CustomIfDirective],
  imports: [CommonModule, DirectivesRouting],
  exports: [],
})
export class DirectiveModule { }
