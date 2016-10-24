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
var platform_browser_1 = require('@angular/platform-browser');
var user_service_1 = require('./user/user.service');
var auth_service_1 = require('./auth.service');
require('rxjs/add/operator/filter');
var AppComponent = (function () {
    function AppComponent(_router, _title, _userService, _authService) {
        this._router = _router;
        this._title = _title;
        this._userService = _userService;
        this._authService = _authService;
        this.isLogged = this._authService.isLogged;
        _router.events
            .filter(function (event) { return event instanceof router_1.RoutesRecognized; })
            .subscribe(function (event) {
            var child = event.state.root;
            while (child.firstChild !== null) {
                child = child.firstChild;
            }
            _title.setTitle(child.data['title']);
        });
    }
    AppComponent.prototype.logout = function () {
        this._userService.logout();
        this._router.navigate(['home']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <nav>\n        <a routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n        <a routerLink=\"/user/list\" routerLinkActive=\"active\">Users</a>\n        <button *ngIf=\"!isLogged\" (click)=\"logout()\">Logout</button>\n    </nav>\n    <hotel name=\"Best Hotel\"></hotel>\n    <router-outlet></router-outlet>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router, platform_browser_1.Title, user_service_1.UserService, auth_service_1.AuthService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map