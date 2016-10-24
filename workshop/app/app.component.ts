import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UserService } from './user/user.service';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'app',
    template: `
    <nav>
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/user/list" routerLinkActive="active">Users</a>
        <button *ngIf="!isLogged" (click)="logout()">Logout</button>
    </nav>
    <hotel name="Best Hotel"></hotel>
    <router-outlet></router-outlet>
    `
}) export class AppComponent {
     
    constructor(private _router:Router, private _title:Title, private _userService:UserService, private _authService:AuthService) {
        _router.events
            .filter((event:any) => event instanceof RoutesRecognized)
            .subscribe((event:RoutesRecognized) => {
                let child = event.state.root;
                while(child.firstChild !== null) { child = child.firstChild; }
                _title.setTitle(child.data['title']);
            });
    }

    isLogged = this._authService.isLogged;

    logout() {
        this._userService.logout();
        this._router.navigate(['home']);
    }

}