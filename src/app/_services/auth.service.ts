import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl;
  userEmail: any;

constructor(private httpClient: HttpClient) { }

  register(model: any) {
    return this.httpClient.post(this.baseUrl + 'sign-up', model);
  }
  login(model: any) {
    return this.httpClient.post(this.baseUrl + 'sign-in', model)
      .pipe(map((response: any) => {
        const user = response;
        if(user) {
          //console.log(user);
          localStorage.setItem('token', user.user.token)
          this.userEmail = user.user.email;
        }
      })
    );
  }

}
