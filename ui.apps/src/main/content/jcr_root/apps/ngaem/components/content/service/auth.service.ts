import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post<any>('https://uat.mobile-api.woolworths.com.au/insurance/v1/login', {UserName: username, Password: password})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.AccessToken) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          console.log(user);
          localStorage.setItem('token', JSON.stringify(user.AccessToken));
        }

        return user;
      }));
  }
}
