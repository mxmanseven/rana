import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LogintCredential as LoginCredential } from './types';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _angularFireAuth: AngularFireAuth) { }

  login(loginCredential: LoginCredential): Promise<any> {
    return this._angularFireAuth.signInWithEmailAndPassword(
      loginCredential.email,
      loginCredential.password);
  }
}
