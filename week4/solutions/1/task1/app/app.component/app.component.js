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
var App = (function () {
    function App(_WordService) {
        var _this = this;
        this._WordService = _WordService;
        this.loadNext = this._WordService.loadNewWord;
        this._WordService.newWordSubscription(this.getRandomNumber).subscribe(function (theWord) {
            _this.currentWord = theWord;
        }, function (err) {
            _this.error = err;
        });
    }
    App.prototype.getRandomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <div *ngIf=\"error\" class=\"error\">Network error!</div>\n    <div *ngIf=\"!error\">\n        {{currentWord}}\n        <button (click)=\"loadNext()\">LoadNext</button>\n    </div>\n    ",
            providers: [word_service_1.WordService]
        }), 
        __metadata('design:paramtypes', [word_service_1.WordService])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.component.js.map