import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[customChangeColorDirective]'
})

export class CustomChangeColorDirective implements AfterViewInit {
  @Input('customChangeColorDirective') colors?: string[];

  private _el: ElementRef;
  constructor(el: ElementRef) {
    this._el = el;
  }
  ngAfterViewInit() {
    this.changeColor(this._el);
  }

  private changeColor(el: ElementRef) {
    if(this.colors && this.colors.length !== 0) {
      setInterval(() => {
        el.nativeElement.style.color = this.colors![Math.floor(Math.random() * this.colors!.length)];
      }, 500)
    }
  }
}
