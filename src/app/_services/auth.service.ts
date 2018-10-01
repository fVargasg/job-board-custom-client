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
        const user = JSON.stringify(response);
        const userinternal = response;
        if(user) {

          localStorage.setItem('token', userinternal.user.token);
          localStorage.setItem('user', user);

          this.userEmail = userinternal.user.email;

        }
      })
    );
  }

}
