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
require('rxjs/add/operator/do');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/scan');
require('rxjs/add/observable/from');
require('rxjs/add/observable/of');
require('rxjs/add/operator/startWith');
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
        this.filter = function (str) {
            if (str === '')
                return Observable_1.Observable.of([]);
            var regex = new RegExp(str.toLowerCase());
            var filterFunc = function (word) { return regex.test(word); };
            var observable;
            if (!_this.words)
                observable = _this.loadWordsFromServer().mergeMap(function (val) { return Observable_1.Observable.from(val); });
            else
                observable = Observable_1.Observable.from(_this.words);
            /*
                We want to make sure that if filter filters out every one from the words
                there is at least one value (str) that will go trough so an empty array set
            */
            return observable.startWith(str).map(function (val) { return val.toLowerCase(); }).filter(filterFunc).scan(function (prev, item, index) {
                if (index === 0)
                    return prev;
                return prev.concat(item);
            }, []);
        };
        this.loadWordsFromServer = function () {
            return _this._http.get('/data.json').map(function (res) {
                return (_this.words = res.json() || []);
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
            if (!_this.words)
                _this.loadWordsFromServer().subscribe(loadNextWord, subscriber.error);
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