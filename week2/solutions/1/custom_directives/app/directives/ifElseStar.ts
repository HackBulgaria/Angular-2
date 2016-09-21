import { Directive, Input, ViewContainerRef, ContentChild, TemplateRef } from '@angular/core';

@Directive({
    selector: '[ifTrueCase]'
}) export class IfTrueCase {
    constructor(private _template:TemplateRef<any>) {}
    getTemplate():TemplateRef<any> {
        return this._template;
    }
}

@Directive({
    selector: '[ifFalseCase]'
}) export class IfFalseCase {
    constructor(private _template:TemplateRef<any>) {}
    getTemplate():TemplateRef<any> {
        return this._template;
    }
}

@Directive({
    selector: '[ifElseStar]'
}) export class IfElseStar {
    @ContentChild(IfTrueCase) trueCase:IfTrueCase;
    @ContentChild(IfFalseCase) falseCase:IfFalseCase;
    constructor(private _cv:ViewContainerRef) {}

    @Input() set ifElseStar(value:boolean) {
        this._cv.clear();
        value ? this._cv.createEmbeddedView(this.trueCase.getTemplate()) : this._cv.createEmbeddedView(this.falseCase.getTemplate()); 
    }
}

