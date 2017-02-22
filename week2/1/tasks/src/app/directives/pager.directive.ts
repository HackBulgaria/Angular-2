import { Directive, TemplateRef, ViewContainerRef, Input, ContentChild, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/take';

@Directive({
  selector: '[pager]'
})
export class PagerDirective implements OnChanges {
  @Input() pageSize: number;
  @Input() currentPage: number;
  @Input() data: any[];

  constructor(private _template: TemplateRef<any>, private _vc: ViewContainerRef) { }

  ngOnChanges() {
    this._vc.clear();
    Observable.from(this.data).skip((this.currentPage - 1) * this.pageSize).take(this.pageSize).subscribe(item => {
      this._vc.createEmbeddedView(this._template, { item });
    });
  }
}
