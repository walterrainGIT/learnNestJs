import { Component } from '@angular/core';

@Component({
  selector: 'directive',
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss'
})

export class DirectiveComponent {
  colors: string[] = ['red', 'blue', 'green', 'yellow'];
}
