import { Injectable } from '@angular/core';
//import {Http, Headers} from '@angular/http';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

import {Observable}     from 'rxjs';

import {HttpClientModule}  from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor (private http: Http) {}

  sendCredential(username: string, password: string) {
    let url = "http://localhost:8080/index";
    let params = 'username='+username+'&password='+password;
    let headers = new Headers(
    {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'Access-Control-Allow-Credentials' : true
    });
    return this.http.post(url, params, {headers: headers, withCredentials : true});
  }

  logout() {
     let url = "http://localhost:8080/logout";
     return this.http.get(url, { withCredentials: true });
   }

}
