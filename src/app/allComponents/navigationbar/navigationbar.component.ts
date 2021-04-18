import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {
  showME:boolean=false;
  modalRef: BsModalRef;
  signUpModal:BsModalRef;
  writeblogModalRef :BsModalRef;
  // modalService: any;
  constructor(private router: Router,private modalService: BsModalService,private helpService:HelperService) { }

  ngOnInit(): void {
  }

  changeBSV(){
    this.helpService.setBehValue(true);
    this.router.navigate([''])
  }

  toggle(){
    this.showME=!this.showME
  }

  openModal(template: TemplateRef<any>,name='') {
    console.log('template ref :: ',template);
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