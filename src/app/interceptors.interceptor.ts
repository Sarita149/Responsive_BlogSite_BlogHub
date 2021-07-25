import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthGuardService } from './services/auth-guard.service';

@Injectable()
export class InterceptorsInterceptor implements HttpInterceptor {

  constructor(private authService: AuthGuardService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // add authorization header with jwt token
    let jwtToken = localStorage.getItem('token');
    // console.log('jwtToken', jwtToken);
    // check another param which is observable and indicate user logged in 
    if (this.authService.isUserLoggedIn()) {
      request = request.clone({
        setHeaders: {
          authorization: jwtToken,
        },
      });
    }
    return next.handle(request);
  }

}
