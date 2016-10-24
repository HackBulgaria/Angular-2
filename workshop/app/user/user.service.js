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
var authHttp_service_1 = require('../authHttp.service');
var auth_service_1 = require('../auth.service');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var UserService = (function () {
    function UserService(_http, _authHttp, _authService) {
        this._http = _http;
        this._authHttp = _authHttp;
        this._authService = _authService;
        this.logout = this._authService.clearCurrentUser;
    }
    UserService.prototype.login = function (email, password) {
        return this._http.post('/api/login', { email: email, password: password }).map(function (res) { return res.json(); });
    };
    UserService.prototype.getAll = function () {
        var _this = this;
        return this._authHttp.get('/api/user/list').map(function (res) { return res.json(); }).map(function (data) { return (_this.users = data); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, authHttp_service_1.AuthHttp, auth_service_1.AuthService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
var UserListResolver = (function () {
    function UserListResolver(_u) {
        this._u = _u;
    }
    UserListResolver.prototype.resolve = function (route) {
        return this._u.getAll().toPromise();
    };
    UserListResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [UserService])
    ], UserListResolver);
    return UserListResolver;
}());
exports.UserListResolver = UserListResolver;
//# sourceMappingURL=user.service.js.map