import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LogintCredential } from '../types';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginFormGroup: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private _loginService: LoginService
    ) { 
    
    this.loginFormGroup = formBuilder.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
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
      })
      .catch(authError => console.error(authError));
  }

}
