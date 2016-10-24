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
var router_1 = require('@angular/router');
;
var AuthService = (function () {
    function AuthService(_router) {
        var _this = this;
        this._router = _router;
        this._currentUser = null;
        this.clearCurrentUser = function () {
            _this._currentUser = null;
            localStorage.removeItem('user-data');
        };
        this.isLogged = function () { return !!_this._currentUser; };
        this._currentUser = JSON.parse(localStorage.getItem('user-data'));
    }
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            return this._currentUser.token;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.canActivate = function (a, s) {
        var result = !!this._currentUser;
        if (!result)
            this._router.navigate(['user/login']);
        return result;
    };
    AuthService.prototype.setCurrentUser = function (data) {
        localStorage.setItem('user-data', JSON.stringify(data));
        this._currentUser = data;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map