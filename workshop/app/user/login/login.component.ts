import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../../auth.service';

@Component({
    template: `
    <div *ngIf="error">Error 500</div>
    <form>
        <div class="form-control">
            <label>Email:</label>
            <input type="email" name="email" [(ngModel)]="account.email">
        </div>
        <div class="form-control">
            <label>Passsword:</label>
            <input type="password" name="password" [(ngModel)]="account.password">
        </div>
        <button (click)="login()">Login</button>
    </form>
    `
}) export class LoginComponent {
    error:boolean = false;
    account = {
        email: '',
        password: ''
    };

    constructor(private _userService:UserService, private _authService:AuthService) {

    }

    login() {
        this._userService.login(this.account.email, this.account.password)
            .subscribe((data:any) => {
                this._authService.setCurrentUser(data);
            }, (err) => {
                this.error = true;
                console.error(err);
            })
    }
}