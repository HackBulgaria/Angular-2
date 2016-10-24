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
var user_service_1 = require('../user.service');
var auth_service_1 = require('../../auth.service');
var LoginComponent = (function () {
    function LoginComponent(_userService, _authService) {
        this._userService = _userService;
        this._authService = _authService;
        this.error = false;
        this.account = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._userService.login(this.account.email, this.account.password)
            .subscribe(function (data) {
            _this._authService.setCurrentUser(data);
        }, function (err) {
            _this.error = true;
            console.error(err);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            template: "\n    <div *ngIf=\"error\">Error 500</div>\n    <form>\n        <div class=\"form-control\">\n            <label>Email:</label>\n            <input type=\"email\" name=\"email\" [(ngModel)]=\"account.email\">\n        </div>\n        <div class=\"form-control\">\n            <label>Passsword:</label>\n            <input type=\"password\" name=\"password\" [(ngModel)]=\"account.password\">\n        </div>\n        <button (click)=\"login()\">Login</button>\n    </form>\n    "
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map