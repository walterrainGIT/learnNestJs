import { Component } from '@angular/core';

@Component({
  selector: 'directive',
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss'
})

export class DirectiveComponent {
  // ngFor

  public colors: string[] = ['red', 'blue', 'green', 'yellow'];

  // ngIf

  public isShow = true;

  //ngSwitch

  public currentColor: string = this.colors[0];

  // ngStyle

  public elementStyle: any = {
    color: 'red',
    opacity: 0.5,
  }

  // ngClass
}
