import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
    template: `
    <ul>
        <li *ngFor="let user of users">{{user.firstName}}</li>
    </ul>
    `
}) export class ListComponent {
    users:any[];
    constructor(private _userService:UserService) {
        this.users = _userService.users;
    }

}