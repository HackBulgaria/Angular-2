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
var RatingComponent = (function () {
    function RatingComponent() {
        var _this = this;
        this.stars = Array(5).fill(null).map(function (val, i) { return i; });
        this.newRatingEmitter = new core_1.EventEmitter();
        this.isClicked = false;
        this.isFilled = function (i) { return _this.currentIndex >= i; };
    }
    Object.defineProperty(RatingComponent.prototype, "rating", {
        set: function (value) {
            this.currentIndex = --value;
            this.isClicked = true;
        },
        enumerable: true,
        configurable: true
    });
    RatingComponent.prototype.click = function (index) {
        this.newRatingEmitter.emit(this.isClicked ? 0 : index + 1);
        if (this.isClicked) {
            this.isClicked = false;
            this.currentIndex = -1;
            return;
        }
        this.isClicked = true;
        this.currentIndex = index;
    };
    RatingComponent.prototype.mouseover = function (index) {
        if (!this.isClicked)
            this.currentIndex = index;
    };
    RatingComponent.prototype.mouseout = function () {
        if (!this.isClicked)
            this.currentIndex = -1;
    };
    __decorate([
        core_1.Output('newRating'), 
        __metadata('design:type', Object)
    ], RatingComponent.prototype, "newRatingEmitter", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], RatingComponent.prototype, "rating", null);
    RatingComponent = __decorate([
        core_1.Component({
            selector: 'rating',
            styles: [
                "ul#rating li{\n            display: inline-block;\n            vertical-align: middle;\n        }\n        img {\n            width: 20px;\n            margin: 1px;\n        }\n        "
            ],
            template: "\n    <ul id=\"rating\">\n        <li *ngFor=\"let num of stars; let i = index\" (click)=\"click(i)\" (mouseover)=\"mouseover(i)\" (mouseout)=\"mouseout()\">\n            <img *ngIf=\"!isFilled(i)\" src=\"/img/star-empty.png\" alt=\"star-e\">\n            <img *ngIf=\"isFilled(i)\" src=\"/img/star-fill.png\" alt=\"star-f\">\n        </li>\n    </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], RatingComponent);
    return RatingComponent;
}());
exports.RatingComponent = RatingComponent;
//# sourceMappingURL=rating.component.js.map