import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './allComponents/category/category.component';
import { FooterComponent } from './allComponents/footer/footer.component';
import { HomeComponent } from './allComponents/home/home.component';
import { LandingPageComponent } from './allComponents/landing-page/landing-page.component';
import { LoginComponent } from './allComponents/users/login/login.component';
import { SignUpComponent } from './allComponents/users/sign-up/sign-up.component';
import { WriteBlogComponent } from './allComponents/write-blog/write-blog.component';

const routes: Routes = [
  // {path:'', component:NavbarComponent},
  {path:'home',component:HomeComponent},
  {path: '', component: LandingPageComponent },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'writeblog',component:WriteBlogComponent},
  {path:'category',component:CategoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
