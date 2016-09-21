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
var IfElse = (function () {
    function IfElse(_cv) {
        this._cv = _cv;
    }
    Object.defineProperty(IfElse.prototype, "ifElse", {
        set: function (value) {
            this._cv.clear();
            value ? this._cv.createEmbeddedView(this.trueTemplate) : this._cv.createEmbeddedView(this.falseTemplate);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ContentChild('true'), 
        __metadata('design:type', core_1.TemplateRef)
    ], IfElse.prototype, "trueTemplate", void 0);
    __decorate([
        core_1.ContentChild('false'), 
        __metadata('design:type', core_1.TemplateRef)
    ], IfElse.prototype, "falseTemplate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], IfElse.prototype, "ifElse", null);
    IfElse = __decorate([
        core_1.Directive({
            selector: '[ifElse]'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], IfElse);
    return IfElse;
}());
exports.IfElse = IfElse;
//# sourceMappingURL=ifElse.js.map