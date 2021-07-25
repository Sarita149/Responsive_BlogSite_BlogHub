import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  private helper: any;

  constructor() {
    this.helper = new JwtHelperService();
  }

  private gettoken() {
    try {
      return localStorage.getItem("token");
    } catch (e) { return null }
  }

  public getDecodeToken() {
    let token = this.gettoken();
    if (token) {
      this.helper.decodeToken(token);
    } else {
      return null;
    }
  }

  public isUserLoggedIn() {
    let token = this.gettoken();
    if (token) {
      const expirationDate = this.helper.getTokenExpirationDate(token);
      const isExpired = this.helper.isTokenExpired(token);
      if (!isExpired) {
        return true;
      }
    }

    return false;
  }
  
}
