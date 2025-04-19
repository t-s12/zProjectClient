import { Injectable } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRequest } from './login-request';
import { Observable, observable } from 'rxjs';
import { LoginResult } from './login-result';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(loginRequest: LoginRequest): Observable<LoginResult>{
    
    
  }
}
