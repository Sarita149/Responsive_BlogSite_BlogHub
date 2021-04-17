import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {
  showME:boolean=false;
  modalRef: BsModalRef;
  // modalService: any;
  constructor(private router: Router,private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  toggle(){
    this.showME=!this.showME
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  close(){
    this.router.navigate(['home']);
  }
}
