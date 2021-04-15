import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './allComponents/home/home.component';
import { NavbarComponent } from './allComponents/landing-page/landingPage_navbar/navbar.component';
import { LandingPageComponent } from './allComponents/landing-page/landing-page.component';
import { NavigationbarComponent } from './allComponents/navigationbar/navigationbar.component';
import { LoginComponent } from './allComponents/users/login/login.component';
import { SignUpComponent } from './allComponents/users/sign-up/sign-up.component';
import { WriteBlogComponent } from './allComponents/write-blog/write-blog.component';
import { FooterComponent } from './allComponents/footer/footer.component';
import { CategoryComponent } from './allComponents/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LandingPageComponent,
    NavigationbarComponent,
    LoginComponent,
    SignUpComponent,
    WriteBlogComponent,
    FooterComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
