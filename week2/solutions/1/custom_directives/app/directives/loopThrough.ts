import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[loopThrough]'
}) export class LoopThrough {
    constructor(private _template:TemplateRef<any>, private _vc:ViewContainerRef) {}
    @Input() set loopThrough(value:any[]) {
        value.map(itm => this._vc.createEmbeddedView(this._template, { item: itm }));
    }
}