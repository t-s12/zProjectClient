import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let token = localStorage.getItem("the_token_49");
  const router = inject(Router);


  if(token){
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req).pipe(catchError(error => {
    if(error instanceof HttpErrorResponse && error.status === 401){
      router.navigate(["/login"]);
    }
    
    return throwError(() => error);
  }));
};
