import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  model: any = {};
  modelLogin: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {

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

    }, error => {
      console.log(error)
    });
  }

  login() {

    const user = {
      "credentials":{
        "email": this.modelLogin.email,
        "password": this.modelLogin.password
      }
    }

    this.authService.login(user).subscribe(next => {
      console.log(next, 'success')
    }, error => {
      console.log(error)
    });
  }

}
