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
var WordView = (function () {
    function WordView() {
    }
    Object.defineProperty(WordView.prototype, "hiddenLetterArray", {
        set: function (value) {
            var _this = this;
            this.hiddenLetterMap = [];
            value.forEach(function (letter) {
                var index = _this.letterArray.indexOf(letter);
                _this.hiddenLetterMap[index] = true;
            });
        },
        enumerable: true,
        configurable: true
    });
    ;
    WordView.prototype.unhideLetter = function (letter) {
        var index = this.letterArray.indexOf(letter);
        this.hiddenLetterMap[index] = false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WordView.prototype, "letterArray", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], WordView.prototype, "hiddenLetterArray", null);
    WordView = __decorate([
        core_1.Component({
            selector: 'word-view',
            styles: ["\n        ul#word-view {\n            padding-left: 0px;\n        }\n\n        ul#word-view li {\n            display: inline-block;\n            margin: 6px;\n        }\n    "],
            template: "\n    <ul id=\"word-view\">\n        <li *ngFor=\"let letter of letterArray; let i = index;\">\n            <letter [letter]=\"letter\" [selected]=\"hiddenLetterMap[i]\">\n                {{letter}}\n            </letter>\n        </li>\n    </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], WordView);
    return WordView;
}());
exports.WordView = WordView;
//# sourceMappingURL=word-view.component.js.map