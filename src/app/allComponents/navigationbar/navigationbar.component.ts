import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { FormGroup, FormControl } from '@angular/forms'
import { UserService } from 'src/app/services/user.service';
import { AlertService } from 'src/app/services/alert.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';


@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  public userDetails = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl('')
  });

  public UserLoginDetails = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public showME: boolean = false;
  public modalRef: BsModalRef;
  public signUpModal: BsModalRef;
  public writeblogModalRef: BsModalRef;
  public user: any = {};

  constructor(private router: Router, private modalService: BsModalService,
    private helpService: HelperService, private userService: UserService,
    private alertService: AlertService, public authService: AuthGuardService) { }



  ngOnInit(): void {
    this.user = this.authService.getDecodeToken();
    // this.user = this.authService.isUserLoggedIn();
  }

  public collectRegData() {
    console.log("signup cred :: ", this.userDetails);
    if (this.userDetails.valid) {
      this.userService.registerUser(this.userDetails.value).subscribe((data) => {
        console.log("register response :: ", data);
        if (data.success) {
          this.signUpModal.hide();
          this.alertService.alertMessage('Registered', data.message, "success");
          this.userDetails.reset();
        } else {
          this.alertService.alertMessage('Error', data.message, "error");
        }
      });
    }
  }

  public UserLogin() {
    console.log("login cred :: ", this.UserLoginDetails.value);
    if (this.UserLoginDetails.valid) {
      this.userService.loginUser(this.UserLoginDetails.value).subscribe((data: any) => {
        console.log("login response :: ", data);
        if (data.success) {
          this.alertService.alertMessage('Logged In', data.message, "success");
          this.modalRef.hide();
          this.UserLoginDetails.reset();
          localStorage.setItem("token", data.token);
        } else {
          this.alertService.alertMessage('Invalid', data.message, "error");
        }
      });
    }
  }

  public logout() {
    localStorage.removeItem("token");
    this.alertService.alertMessage('Success', 'Logged Out !', "success");
  }

  public changeBSV() {
    this.helpService.setBehValue(true);
    this.router.navigate([''])
  }

  public toggle() {
    this.showME = !this.showME
  }

  public openModal(template: TemplateRef<any>, name = '') {
    if (name == 'writeblog') {
      this.writeblogModalRef = this.modalService.show(template);
    }
    else if (name == 'signupmodal') {
      this.signUpModal = this.modalService.show(template);
    } else {
      this.modalRef = this.modalService.show(template);
    }

  }


}