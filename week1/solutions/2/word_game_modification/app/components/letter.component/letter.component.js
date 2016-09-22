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
var Letter = (function () {
    function Letter() {
        this.isSelected = false;
        this.correct = false;
        this.clickedEmitter = new core_1.EventEmitter();
    }
    Letter.prototype.clickHandler = function () {
        if (this.isSelected || !this.correct)
            return console.log('Letter already selected or incorrect!');
        this.isSelected = true;
        this.clickedEmitter.emit(this);
    };
    __decorate([
        core_1.Input('selected'), 
        __metadata('design:type', Boolean)
    ], Letter.prototype, "isSelected", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Letter.prototype, "correct", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Letter.prototype, "letter", void 0);
    __decorate([
        core_1.Output('clicked'), 
        __metadata('design:type', Object)
    ], Letter.prototype, "clickedEmitter", void 0);
    Letter = __decorate([
        core_1.Component({
            selector: 'letter',
            template: "\n    <div class=\"letter\" (click)=\"clickHandler()\" [ngClass]=\"{ selected: isSelected && !correct, marked: isSelected && correct }\">\n        <ng-content></ng-content>\n    </div>\n    ",
            styles: [
                "\n        div.letter.selected:before {\n            content: \"_\";\n            height: 20px;\n            position: absolute;\n            color: black;\n            background-color: white;\n        }\n        div.letter.marked {\n            color: #4be420 !important;\n        }\n        div.letter {\n            display: inline-block;\n            font-size: 20px;\n            width: 20px;\n            cursor: pointer;\n            border: 1px solid transparent;\n            text-align: center;\n        }\n        div.letter:hover {\n            border: 1px solid black;\n        }\n        "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Letter);
    return Letter;
}());
exports.Letter = Letter;
//# sourceMappingURL=letter.component.js.map