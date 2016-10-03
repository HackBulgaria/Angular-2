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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var WordService = (function () {
    function WordService(_http) {
        var _this = this;
        this._http = _http;
        this.newWordSubscribers = [];
        this.loadNewWord = function () {
            _this.newWordSubscribers.map(function (item) {
                item.loadNextWord();
                console.log('Load next');
            });
        };
    }
    Object.defineProperty(WordService.prototype, "currentWord", {
        get: function () {
            return this._currentWord;
        },
        enumerable: true,
        configurable: true
    });
    WordService.prototype.newWordSubscription = function (randomGenerator) {
        var _this = this;
        return new Observable_1.Observable(function (subscriber) {
            var loadNextWord = function () { return subscriber.next(_this._currentWord = _this.words[randomGenerator(0, _this.words.length)]); };
            if (!_this.words) {
                _this._http.get('/data.json').map(function (res) {
                    _this.words = res.json() || [];
                    loadNextWord();
                }).catch(function (err) { subscriber.error(err); return Observable_1.Observable.throw(err); }).subscribe();
            }
            else
                loadNextWord();
            _this.newWordSubscribers.push({ loadNextWord: loadNextWord, subscriber: subscriber });
        });
    };
    WordService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WordService);
    return WordService;
}());
exports.WordService = WordService;
//# sourceMappingURL=word.service.js.map