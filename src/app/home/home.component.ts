import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model: any = {};
  modelLogin: any = {};
  constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.loggedIn();
  }

  register() {

    const user = {
      "credentials":{
        "name": this.model.name,
        "role": "Administrator",
        "email": this.model.email,
        "password": this.model.password,
        "password_confirmation": this.model.password_confirmation
      }
    }

    this.authService.register(user).subscribe(resp => {
      this.alertify.success('Your account was created successfully!');
    }, error => {
      this.alertify.error(error.message);
    });
  }

  login() {

    const user = {
      "credentials":{
        "email": this.modelLogin.email,
        "password": this.modelLogin.password
      }
    }

    this.authService.login(user).subscribe(() => {
      this.alertify.success('Logged successfully!');
    }, error => {
      this.alertify.error(error.message);
    }, () => {
      this.router.navigate(['/dashboard']);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
}
