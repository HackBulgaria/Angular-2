import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { AuthHttp } from '../authHttp.service';
import { AuthService } from '../auth.service';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    users:any[];
    constructor(private _http:Http, private _authHttp:AuthHttp, private _authService:AuthService) {

    }

    login(email:string, password:string):Observable<any> {
        return this._http.post('/api/login', { email, password }).map(res => res.json());
    }

    logout = this._authService.clearCurrentUser;

    getAll():Observable<any> {
        return this._authHttp.get('/api/user/list').map(res => res.json()).map((data) => (this.users = data));
    }
}

@Injectable() 
export class UserListResolver implements Resolve<any> {

    constructor(private _u:UserService) {}

    resolve(route: ActivatedRouteSnapshot):Promise<any> {
        return this._u.getAll().toPromise();
    }
}