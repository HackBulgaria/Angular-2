import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Headers, RequestOptions, Http, Response, ConnectionBackend } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthHttp {

    constructor(private _authService:AuthService, private _http:Http, private _backend:ConnectionBackend) { 
        let originalPost = _http.post;
        _http.post = function(url:string, body:any, options:RequestOptions):Observable<Response> {
            if(_authService.isLogged) options.headers.append('x-access-token', this._authService.token);
            return originalPost(url, body, options);
        } 
    }

    private createHeaders() {
        let headers = new Headers({ 'x-access-token': this._authService.token });
        return new RequestOptions({ headers: headers });
    }

    get(url:string):Observable<Response> {
        return this._http.get(url,this.createHeaders())
    }

    post(url:string, data:any) {
        return this._http.post(url, data, this.createHeaders());
    }
}