import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import {FormGroup,FormControl} from '@angular/forms'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  constructor(private router: Router,private modalService: BsModalService,
    private helpService:HelperService,private userService:UserService) { }

  userDetails = new FormGroup({
    username : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    phone : new FormControl('')
  })

  collectRegData(){
    // console.log(this.userDetails);
    if(this.userDetails.valid){
      this.userService.registerUser(this.userDetails.value).subscribe((data)=>{
        this.userDetails.reset();
        // this.router.navigate(['']);
      })
    }    
  }

  UserLoginDetails=new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),
  })
  UserLogin(){
    let user = '1';
    localStorage.setItem('SeesionUser',user) 
    console.log(this.UserLoginDetails.value);
    if(this.UserLoginDetails.valid){
      this.loginValid = false;
    this.logOut = false;
      this.userService.loginUser(this.UserLoginDetails.value).subscribe((data:any)=>{
        console.log(data);
        this.UserLoginDetails.reset();
        localStorage.setItem("token",data.token);
        // this.router.navigate(['home']);
      });
    }
    console.log("Logged IN",this.loginValid);
  }
  logout(){
    localStorage.removeItem("token");
    this.loginValid = true;
    this.logOut = true;
    console.log("Loged Out",this.loginValid);
    
  }
  
  showME:boolean=false;
  modalRef: BsModalRef;
  signUpModal:BsModalRef;
  writeblogModalRef :BsModalRef;
  // modalService: any;
  
  loginValid:boolean = true;
  logOut:boolean = true;
  ngOnInit(): void {
    let logedInUser = localStorage.getItem("token");
    if(logedInUser){
      this.logOut = false;
      this.loginValid = false;
    }
  }
  
  changeBSV(){
    this.helpService.setBehValue(true);
    this.router.navigate([''])
  }

  toggle(){
    this.showME=!this.showME
  }

  openModal(template: TemplateRef<any>,name='') {
    // console.log('template ref :: ',template);
    if(name=='writeblog'){
      this.writeblogModalRef =  this.modalService.show(template);
    }
    else if(name=='signupmodal'){
      this.signUpModal =  this.modalService.show(template);
    }else {
      this.modalRef = this.modalService.show(template);
    }
    
  }

  close(){
    this.router.navigate(['home']);
  }
}