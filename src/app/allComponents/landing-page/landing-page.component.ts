import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  isCollapsable: boolean = false;
  aboutVal: boolean;

  constructor(private router: Router, private helpService: HelperService) { }

  ngOnInit(): void {
    this.helpService.getBehValue().subscribe(res => {
      this.aboutVal = res;
      console.log(res);
    });
  }
  forSignup() {
    this.router.navigate(['home']);

  }
  forLogin() {
    this.router.navigate(['home']);
  }

  // changeCollapse(){
  //   this.isCollapsable = !this.isCollapsable;
  // }
}
