import { Component, OnInit } from '@angular/core';
import { Router, Event as NavigationEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'frontend';

  private navurl: string = '';

  constructor(public router: Router) {
    // console.log(router.url);
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationEnd) {
        //  console.log(event.url);
        this.navurl = event.url;
      }
    });
  }

  checkNavURL() {
    if (this.navurl == '/') {
      return true;
    } else if (this.navurl == '/category') {
      return false;
    } else if (this.navurl == '/writeblog') {
      return true;
    }
  }

}
