import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './allComponents/home/home.component';
import { NavbarComponent } from './allComponents/landing-page/landingPage_navbar/navbar.component';
import { LandingPageComponent } from './allComponents/landing-page/landing-page.component';
import { NavigationbarComponent } from './allComponents/navigationbar/navigationbar.component';
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
    WriteBlogComponent,
    FooterComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
