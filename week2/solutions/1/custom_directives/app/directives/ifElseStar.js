"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var IfTrueCase = (function () {
    function IfTrueCase(_template) {
        this._template = _template;
    }
    IfTrueCase.prototype.getTemplate = function () {
        return this._template;
    };
    IfTrueCase = __decorate([
        core_1.Directive({
            selector: '[ifTrueCase]'
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef])
    ], IfTrueCase);
    return IfTrueCase;
}());
exports.IfTrueCase = IfTrueCase;
var IfFalseCase = (function () {
    function IfFalseCase(_template) {
        this._template = _template;
    }
    IfFalseCase.prototype.getTemplate = function () {
        return this._template;
    };
    IfFalseCase = __decorate([
        core_1.Directive({
            selector: '[ifFalseCase]'
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef])
    ], IfFalseCase);
    return IfFalseCase;
}());
exports.IfFalseCase = IfFalseCase;
var IfElseStar = (function () {
    function IfElseStar(_cv) {
        this._cv = _cv;
    }
    Object.defineProperty(IfElseStar.prototype, "ifElseStar", {
        set: function (value) {
            this._cv.clear();
            value ? this._cv.createEmbeddedView(this.trueCase.getTemplate()) : this._cv.createEmbeddedView(this.falseCase.getTemplate());
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ContentChild(IfTrueCase), 
        __metadata('design:type', IfTrueCase)
    ], IfElseStar.prototype, "trueCase", void 0);
    __decorate([
        core_1.ContentChild(IfFalseCase), 
        __metadata('design:type', IfFalseCase)
    ], IfElseStar.prototype, "falseCase", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], IfElseStar.prototype, "ifElseStar", null);
    IfElseStar = __decorate([
        core_1.Directive({
            selector: '[ifElseStar]'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], IfElseStar);
    return IfElseStar;
}());
exports.IfElseStar = IfElseStar;
//# sourceMappingURL=ifElseStar.js.map