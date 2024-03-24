import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective implements OnInit{
  private _show = false;

  @Input() set customIf(show: boolean) {
    this._show = show;
    this.displayTemplate();
  }

  constructor(
    private vcr: ViewContainerRef,
    private templateRef: TemplateRef<unknown>
  ) { }

  ngOnInit(): void {
    this.displayTemplate();
  }

  private displayTemplate() {
    this.vcr.clear();
    if (this._show) {
      this.vcr.createEmbeddedView(this.templateRef);
    }
  }
}
