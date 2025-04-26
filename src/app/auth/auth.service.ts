import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { BehaviorSubject, Observable, observable, tap } from 'rxjs';
import { LoginResult } from './login-result';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authStatus = new BehaviorSubject<boolean>(false);
  authStatus = this._authStatus.asObservable();

  private setAuthStatus(status:boolean){
    this._authStatus.next(status);
  }

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<LoginResult>{
    let url = `${environment.baseUrl}api/Admin/Login`;
    return this.http.post<LoginResult>(url, loginRequest)
    .pipe(tap(loginResult => {
      if(loginResult){
        localStorage.setItem("the_token_49", loginResult.token);
        this.setAuthStatus(true);
      }
    } ));
  }

  logout(){
    
  }
}
