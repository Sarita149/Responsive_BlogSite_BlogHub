import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
constructor(private Authguardservice: AuthGuardService, private router: Router){}
  
canActivate():boolean {
    let jwtToken = localStorage.getItem('token');
    // console.log(jwtToken);
    if(!jwtToken){
      alert("Please Login")
      return false;
      // this.router.navigateByUrl("/home");
    }
    return this.Authguardservice.gettoken();
    // return true;
  }
  
}
