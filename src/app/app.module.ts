import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSummernoteModule } from 'ngx-summernote';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './allComponents/home/home.component';
import { NavbarComponent } from './allComponents/landing-page/landingPage_navbar/navbar.component';
import { LandingPageComponent } from './allComponents/landing-page/landing-page.component';
import { NavigationbarComponent } from './allComponents/navigationbar/navigationbar.component';
import { WriteBlogComponent } from './allComponents/write-blog/write-blog.component';
import { FooterComponent } from './allComponents/footer/footer.component';
import { CategoryComponent } from './allComponents/category/category.component';
import { InterceptorsInterceptor } from './interceptors.interceptor';
import { SignupComponent } from './allComponents/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LandingPageComponent,
    NavigationbarComponent,
    WriteBlogComponent,
    FooterComponent,
    CategoryComponent,
    SignupComponent,
  ],
  imports: [
    NgxSummernoteModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : InterceptorsInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
