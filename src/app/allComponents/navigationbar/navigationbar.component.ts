import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { FormGroup, FormControl } from '@angular/forms'
import { UserService } from 'src/app/services/user.service';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  constructor(private router: Router, private modalService: BsModalService,
    private helpService: HelperService, private userService: UserService, private alertService: AlertService) { }

  userDetails = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl('')
  })

  collectRegData() {
    console.log("signup cred :: ", this.userDetails);
    if (this.userDetails.valid) {
      this.userService.registerUser(this.userDetails.value).subscribe((data) => {
        console.log("register response :: ", data);
        if (data.success) {
          this.alertService.alertMessage('Registered', data.message, "success");
          this.userDetails.reset();
        } else {
          this.alertService.alertMessage('Error', data.message, "error");
        }
      });
    }
  }

  UserLoginDetails = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  UserLogin() {
    // let user = '1';
    // localStorage.setItem('SeesionUser',user) 
    console.log("login cred :: ", this.UserLoginDetails.value);
    if (this.UserLoginDetails.valid) {
      // this.loginValid = false;
      // this.logOut = false;
      this.userService.loginUser(this.UserLoginDetails.value).subscribe((data: any) => {
        console.log("login response :: ", data);
        if (data.success) {
          this.alertService.alertMessage('Loged In', data.message, "success");
          this.UserLoginDetails.reset();
          localStorage.setItem("token", data.token);
        } else {
          this.alertService.alertMessage('Invalid', data.message, "error");
        }
      });
    }
  }


  // UserLogin() {
  //   console.log(this.UserLoginDetails.value);
  //   if (this.UserLoginDetails.valid) {
  //     this.userService.loginUser(this.UserLoginDetails.value).subscribe((data: any) => {
  //       console.log(data);
  //       this.UserLoginDetails.reset();
  //       localStorage.setItem("token", data.token);
  //       // this.router.navigate(['home']);
  //     });
  //   }
  //   console.log("Logged IN", this.loginValid);
  // }
  logout() {
    localStorage.removeItem("token");
    this.loginValid = true;
    this.logOut = true;
    console.log("Loged Out", this.loginValid);
  }

  showME: boolean = false;
  modalRef: BsModalRef;
  signUpModal: BsModalRef;
  writeblogModalRef: BsModalRef;
  // modalService: any;

  loginValid: boolean = true;
  logOut: boolean = true;
  ngOnInit(): void {
    let logedInUser = localStorage.getItem("token");
    if (logedInUser) {
      this.logOut = false;
      this.loginValid = false;
    }
  }

  changeBSV() {
    this.helpService.setBehValue(true);
    this.router.navigate([''])
  }

  toggle() {
    this.showME = !this.showME
  }

  openModal(template: TemplateRef<any>, name = '') {
    // console.log('template ref :: ',template);
    if (name == 'writeblog') {
      this.writeblogModalRef = this.modalService.show(template);
    }
    else if (name == 'signupmodal') {
      this.signUpModal = this.modalService.show(template);
    } else {
      this.modalRef = this.modalService.show(template);
    }

  }

  close() {
    this.router.navigate(['home']);
  }
}