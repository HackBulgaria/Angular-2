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
var word_data_store_1 = require('../../data.store/word-data.store');
var Letter = (function () {
    function Letter(letter) {
        this.selected = false;
        this.symbol = letter;
    }
    return Letter;
}());
var WordComponent = (function () {
    function WordComponent() {
        this.currentWordArray = [];
        this.currentHiddenPositions = [];
        this.letterBank = {};
        this.showNextBtn = false;
        this.noWordsInDatastore = false;
        this.dataStore = word_data_store_1.WordDataStore.words;
        this.loadNextWord();
    }
    WordComponent.prototype.getRandomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    WordComponent.prototype.getAllIndexes = function (arr, val) {
        var indexes = [], i = -1;
        while ((i = arr.indexOf(val, i + 1)) != -1) {
            indexes.push(i);
        }
        return indexes;
    };
    WordComponent.prototype.clear = function () {
        this.currentWord = undefined;
        this.currentWordArray = [];
        this.currentHiddenPositions = [];
        this.letterBank = {};
        this.letterBankArray = [];
        this.showNextBtn = false;
    };
    WordComponent.prototype.loadNextWord = function () {
        var _this = this;
        this.clear();
        //if datastore is empty show error
        if (word_data_store_1.WordDataStore.words.length === 0)
            return (this.noWordsInDatastore = true);
        this.currentWord = word_data_store_1.WordDataStore.words[this.getRandomNumber(0, word_data_store_1.WordDataStore.words.length - 1)];
        //we want words longer than 3 chars
        if (this.currentWord.length < 3) {
            var index = word_data_store_1.WordDataStore.words.indexOf(this.currentWord);
            word_data_store_1.WordDataStore.words.splice(index, 1);
            return this.loadNextWord();
        }
        this.currentWord = this.dataStore[this.getRandomNumber(0, this.dataStore.length - 1)];
        this.currentWordArray = this.currentWord.split('');
        var maxHidden = Math.floor(this.currentWord.length - 3);
        var numberOfHidden = this.getRandomNumber(1, maxHidden);
        var difference = 8 - numberOfHidden;
        for (var i = 0; i < numberOfHidden; i++) {
            var position = this.getRandomNumber(0, this.currentWord.length - 1);
            var symbol = this.currentWord[position];
            if (!this.letterBank[symbol])
                this.currentHiddenPositions.push(position);
            else
                difference++;
            this.letterBank[symbol] = new Letter(symbol);
        }
        for (var i = 0; i < difference; i++) {
            var letter = new Letter(word_data_store_1.WordDataStore.alphabet[this.getRandomNumber(0, word_data_store_1.WordDataStore.alphabet.length - 1)]);
            if (!this.letterBank[letter.symbol])
                this.letterBank[letter.symbol] = letter;
            else
                --i;
        }
        this.letterBankArray = Object.keys(this.letterBank).map(function (key) { return _this.letterBank[key]; }).sort(function () { return .5 - Math.random(); });
    };
    WordComponent.prototype.letterClick = function (symbol) {
        var _this = this;
        var hiddenPositionIndex, indexes = this.getAllIndexes(this.currentWordArray, symbol);
        indexes.forEach(function (index) {
            if ((hiddenPositionIndex = _this.currentHiddenPositions.indexOf(index)) === -1)
                return;
            _this.currentHiddenPositions.splice(hiddenPositionIndex, 1);
            if (_this.currentHiddenPositions.length === 0)
                _this.showNextBtn = true;
            _this.letterBank[symbol].selected = true;
        });
    };
    WordComponent = __decorate([
        core_1.Component({
            selector: 'word',
            template: "\n    <div id=\"word-view\" *ngIf=\"!noWordsInDatastore\">\n        <ul>\n            <li *ngFor=\"let letter of currentWordArray; let i = index;\">\n                <span *ngIf=\"currentHiddenPositions.indexOf(i) === -1\">{{letter}}</span>\n                <span *ngIf=\"currentHiddenPositions.indexOf(i) !== -1\">_</span>\n            </li>\n        </ul>\n    </div>\n    <div id=\"letter-bank\">\n        <ul>\n            <li *ngFor=\"let letter of letterBankArray; let i = index;\" (click)=\"letterClick(letter.symbol)\">\n                <span [ngClass]=\"{ selected: letter.selected }\">{{letter.symbol}}</span>\n            </li>\n        </ul>\n    </div>\n    <div id=\"buttons\" *ngIf=\"showNextBtn\">\n        <button (click)=\"loadNextWord()\">Next Word</button>\n    </div>\n    <div *ngIf=\"noWordsInDatastore\" class=\"error\">Word datastore is empty!</div>\n    ",
            styles: ["\n        .error {\n            color:red;\n        }\n        div#word-view ul li { \n            display: inline-block; \n            margin-left: 5px; \n            margin-right: 5px; \n        }\n        div#letter-bank ul li { \n            display: inline-block;\n            text-align: center;\n            width: 20px;\n            height: 20px;\n            margin: 5px;\n            cursor: pointer;\n            border: 1px solid;\n        } \n        div#letter-bank ul { \n            width: 130px; \n        }\n        div#letter-bank li {\n            background-color: white;\n            color: black;\n            transition: all 500ms ease-out;\n        }\n        div#letter-bank span.selected {\n            background-color: black;\n            color: white;\n            width: 20px;\n            height: 20px;\n            display: inline-block;\n        }\n        div#letter-bank li:active {\n            background-color: black;\n            color: white;\n            transition: all 0s ease-out; \n        }"]
        }), 
        __metadata('design:paramtypes', [])
    ], WordComponent);
    return WordComponent;
}());
exports.WordComponent = WordComponent;
//# sourceMappingURL=word.component.js.map