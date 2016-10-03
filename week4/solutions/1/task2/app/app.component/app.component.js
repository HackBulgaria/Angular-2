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
var word_service_1 = require('../word/word.service');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/fromEvent');
require('rxjs/add/operator/mergeMap');
var App = (function () {
    function App(_WordService) {
        this._WordService = _WordService;
    }
    App.prototype.getRandomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    App.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.filterResult$ = Observable_1.Observable.fromEvent(this.filterInput.nativeElement, 'keyup')
            .mergeMap(function () { return _this._WordService.filter(_this.filterInput.nativeElement.value); });
    };
    __decorate([
        core_1.ViewChild('filterInput'), 
        __metadata('design:type', core_1.ElementRef)
    ], App.prototype, "filterInput", void 0);
    App = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <div *ngIf=\"error\" class=\"error\">Network error!</div>\n    <div *ngIf=\"!error\">\n        <input type=\"text\" #filterInput placeholder=\"Search\">\n        <h4>Result:</h4>\n        <ul>\n            <li *ngFor=\"let word of filterResult$ | async\">{{word}}</li>\n        </ul>\n    </div>\n    ",
            providers: [word_service_1.WordService]
        }), 
        __metadata('design:paramtypes', [word_service_1.WordService])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.component.js.map