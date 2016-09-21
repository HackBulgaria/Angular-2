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
var ifElse_1 = require('./ifElse');
var loopThrough_1 = require('./loopThrough');
var ifElseStar_1 = require('./ifElseStar');
var CustomDirectiveModule = (function () {
    function CustomDirectiveModule() {
    }
    CustomDirectiveModule = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [ifElse_1.IfElse, loopThrough_1.LoopThrough, ifElseStar_1.IfElseStar, ifElseStar_1.IfTrueCase, ifElseStar_1.IfFalseCase],
            exports: [ifElse_1.IfElse, loopThrough_1.LoopThrough, ifElseStar_1.IfTrueCase, ifElseStar_1.IfFalseCase, ifElseStar_1.IfElseStar]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomDirectiveModule);
    return CustomDirectiveModule;
}());
exports.CustomDirectiveModule = CustomDirectiveModule;
;
//# sourceMappingURL=customDirectives.module.js.map