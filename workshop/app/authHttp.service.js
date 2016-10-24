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
var auth_service_1 = require('./auth.service');
var http_1 = require('@angular/http');
var AuthHttp = (function () {
    function AuthHttp(_authService, _http, _backend) {
        this._authService = _authService;
        this._http = _http;
        this._backend = _backend;
        var originalPost = _http.post;
        _http.post = function (url, body, options) {
            if (_authService.isLogged)
                options.headers.append('x-access-token', this._authService.token);
            return originalPost(url, body, options);
        };
    }
    AuthHttp.prototype.createHeaders = function () {
        var headers = new http_1.Headers({ 'x-access-token': this._authService.token });
        return new http_1.RequestOptions({ headers: headers });
    };
    AuthHttp.prototype.get = function (url) {
        return this._http.get(url, this.createHeaders());
    };
    AuthHttp.prototype.post = function (url, data) {
        return this._http.post(url, data, this.createHeaders());
    };
    AuthHttp = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, http_1.Http, http_1.ConnectionBackend])
    ], AuthHttp);
    return AuthHttp;
}());
exports.AuthHttp = AuthHttp;
//# sourceMappingURL=authHttp.service.js.map