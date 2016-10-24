import { Component } from '@angular/core';

@Component({
    template: `
    <nav>
        <a routerLink="/user/list" routerLinkActive="active">List</a>
        <a routerLink="/user/login" routerLinkActive="active">Login</a>
    </nav>
    <router-outlet></router-outlet>
    `
}) export class UserComponent {

}