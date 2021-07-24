import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogServiceService } from './services/blog-service.service';
import { Router, RouterModule } from '@angular/router';

@Injectable()
export class InterceptorsInterceptor implements HttpInterceptor {

  constructor(private blogServvice : BlogServiceService,private router : Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // add authorization header with jwt token
    let jwtToken = localStorage.getItem('token');
    console.log('jwtToken', jwtToken);
    // check another param which is observable and indicate user logged in 
    if (jwtToken !== undefined && jwtToken !== null && jwtToken !== '') {
      request = request.clone({
        setHeaders: {
          authorization: jwtToken,
        },
      });
    }
    return next.handle(request);
}

}
