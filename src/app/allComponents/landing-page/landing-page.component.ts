import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  isCollapsable:boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  forSignup(){
    this.router.navigate(['home']);
    
  }
  forLogin(){
    this.router.navigate(['home']);
  }

  // changeCollapse(){
  //   this.isCollapsable = !this.isCollapsable;
  // }
}
