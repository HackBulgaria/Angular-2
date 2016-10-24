import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

export interface IUserData { email:string, firstName:string, lastName:string, token:string };

@Injectable()
export class AuthService implements CanActivate{
    private _currentUser:IUserData = null;

    constructor(private _router:Router) {
        this._currentUser = JSON.parse(localStorage.getItem('user-data'));
    }

    get token() {
        return this._currentUser.token;
    }

    clearCurrentUser = () => {
        this._currentUser = null;
        localStorage.removeItem('user-data');
    }

    canActivate(a:ActivatedRouteSnapshot, s:RouterStateSnapshot):boolean {
        var result = !!this._currentUser;
        if(!result) this._router.navigate(['user/login']);
        return result;
    }

    setCurrentUser(data:IUserData) {
        localStorage.setItem('user-data', JSON.stringify(data));
        this._currentUser = data;
    }

    isLogged = ():boolean => !!this._currentUser;
}