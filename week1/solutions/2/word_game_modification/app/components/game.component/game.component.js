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
var word_view_component_1 = require('../word-view.component/word-view.component');
var word_data_store_1 = require('../../data.store/word-data.store');
var Game = (function () {
    function Game() {
        this.counter = 0;
        this.noWordsInDatastore = false;
        this.wordCompleted = false;
        this.clean();
        this.loadNextWord();
    }
    Game.prototype.correctLetterSelected = function (letterComponent) {
        this.counter++;
        this.wordView.unhideLetter(letterComponent.letter);
        if (this.counter === this.hiddenLetters.length) {
            this.wordCompleted = true;
            /*
                We have to clean the arrays after the word is guessed (completed).
                If we move this step in loadNextWord we are going to have problems
                because some existing letters in letter bank might not get deleted.
                If you dont understand why this is happening, just come and ask me.
            */
            this.clean();
        }
    };
    Game.prototype.getRandomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    Game.prototype.clean = function () {
        this.selectedLetters = [];
        this.letterArray = [];
        this.hiddenLetters = [];
        this.hiddenLettersIndexes = [];
        this.letterBank = [];
        this.counter = 0;
    };
    Game.prototype.loadNextWord = function () {
        var _this = this;
        this.wordCompleted = false;
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
        this.letterArray = this.currentWord.split('');
        var maxHidden = Math.floor(this.currentWord.length - 1);
        var numberOfHidden = this.getRandomNumber(1, maxHidden);
        var difference = 8 - numberOfHidden;
        for (var i = 0; i < numberOfHidden; i++) {
            var position = this.getRandomNumber(0, this.currentWord.length - 1);
            var symbol = this.currentWord[position];
            if (this.letterBank.indexOf(symbol) === -1) {
                this.hiddenLettersIndexes.push(position);
                this.letterBank.push(symbol);
            }
            else
                difference++;
        }
        for (var i = 0; i < difference; i++) {
            var additionalLetter = word_data_store_1.WordDataStore.alphabet[this.getRandomNumber(0, word_data_store_1.WordDataStore.alphabet.length - 1)];
            if (this.letterBank.indexOf(additionalLetter) === -1)
                this.letterBank.push(additionalLetter);
            else
                --i;
        }
        //randmoize the letter bank
        this.letterBank = this.letterBank.sort(function () { return .5 - Math.random(); });
        this.hiddenLetters = this.hiddenLettersIndexes.map(function (index) { return _this.letterArray[index]; });
    };
    __decorate([
        core_1.ViewChild(word_view_component_1.WordView), 
        __metadata('design:type', word_view_component_1.WordView)
    ], Game.prototype, "wordView", void 0);
    Game = __decorate([
        core_1.Component({
            selector: 'game',
            styles: ["\n    div.title {\n        font-weight: 600;\n    }\n    div#word-holder {\n        text-align: left;\n        border: 1px solid;\n        font-size: 20px;\n    }\n    div.title {\n        margin-top: 20px;\n        font-size: 20px;\n        margin-bottom: 10px;\n    }\n    div.letter-bank {\n        font-size: 20px;\n    }\n    div#current-word {\n        margin-bottom: 35px;\n        padding-top: 10px;\n        letter-spacing: 20px;\n        padding-left: 10px;\n    }\n    "],
            template: "\n    <div *ngIf=\"noWordsInDatastore\">NO WORDS FOUND IN DATASTORE</div>\n    <div *ngIf=\"!noWordsInDatastore\">\n        <div id=\"word-holder\">\n            <word-view [letterArray]=\"letterArray\" [hiddenLetterArray]=\"hiddenLetters\"></word-view>\n            <div *ngIf=\"wordCompleted\" id=\"current-word\">{{currentWord}}</div>\n        </div>        \n        <letter-bank #letterBankRef *ngIf=\"letterBank.length > 0\">\n            <div class=\"title\">Letter Bank:</div>\n            <letter class=\"letter\" *ngFor=\"let letter of letterBank\" [letter]=\"letter\" [correct]=\"hiddenLetters.indexOf(letter) !== -1\" (clicked)=\"letterBankRef.letterClicked($event); correctLetterSelected($event)\">{{letter}}</letter>\n        </letter-bank>\n        <div *ngIf=\"wordCompleted\">\n            <button (click)=\"loadNextWord()\">Next word</button>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Game);
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.component.js.map