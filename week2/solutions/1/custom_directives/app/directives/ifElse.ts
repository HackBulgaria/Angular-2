import { Directive, Input, ViewContainerRef, ContentChild, TemplateRef } from '@angular/core';

@Directive({
    selector: '[ifElse]'
}) export class IfElse {
    @ContentChild('true') trueTemplate:TemplateRef<any>;
    @ContentChild('false') falseTemplate:TemplateRef<any>;

    constructor(private _cv:ViewContainerRef) {}

    @Input() set ifElse(value:boolean) {
        this._cv.clear();
        value ? this._cv.createEmbeddedView(this.trueTemplate) : this._cv.createEmbeddedView(this.falseTemplate); 
    }
}