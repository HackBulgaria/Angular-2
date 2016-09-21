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
var LoopThrough = (function () {
    function LoopThrough(_template, _vc) {
        this._template = _template;
        this._vc = _vc;
    }
    Object.defineProperty(LoopThrough.prototype, "loopThrough", {
        set: function (value) {
            var _this = this;
            value.map(function (itm) { return _this._vc.createEmbeddedView(_this._template, { item: itm }); });
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], LoopThrough.prototype, "loopThrough", null);
    LoopThrough = __decorate([
        core_1.Directive({
            selector: '[loopThrough]'
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
    ], LoopThrough);
    return LoopThrough;
}());
exports.LoopThrough = LoopThrough;
//# sourceMappingURL=loopThrough.js.map