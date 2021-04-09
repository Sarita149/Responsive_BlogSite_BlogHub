import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './allComponents/home/home.component';
import { NavbarComponent } from './allComponents/landing-page/landingPage_navbar/navbar.component';
import { LandingPageComponent } from './allComponents/landing-page/landing-page.component';
import { NavigationbarComponent } from './allComponents/navigationbar/navigationbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LandingPageComponent,
    NavigationbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
