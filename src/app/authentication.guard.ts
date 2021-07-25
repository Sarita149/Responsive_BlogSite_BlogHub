import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService } from './services/alert.service';
import { AuthGuardService } from './services/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private Authguardservice: AuthGuardService, private alertService: AlertService) { }

  canActivate(): boolean {
    if (this.Authguardservice.isUserLoggedIn()) {
      return true;
    }

    this.alertService.alertMessage('Oops', 'Please login first !', 'error');
    return false;
  }

}
