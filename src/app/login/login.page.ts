import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LogintCredential } from '../types';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginFormGroup: FormGroup;

  constructor(
    private _router: Router,
    formBuilder: FormBuilder,
    private _loginService: LoginService
    ) { 
    
    this.loginFormGroup = formBuilder.group({
      email: ["devtest2@knh.com", [Validators.required]],
      password: ["123456", [Validators.required]],
    });
  }

  ngOnInit() {
  }

  login() {
    const loginCredential: LogintCredential = 
      this.loginFormGroup.value;
    
    this._loginService.login(loginCredential)
      .then(authData => {
        console.log(authData);
        this._router.navigate(["/tabs"]);
      })
      .catch(authError => console.error(authError));
  }

}
