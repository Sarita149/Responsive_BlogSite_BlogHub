import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './allComponents/category/category.component';
import { HomeComponent } from './allComponents/home/home.component';
import { LandingPageComponent } from './allComponents/landing-page/landing-page.component';
import { WriteBlogComponent } from './allComponents/write-blog/write-blog.component';

const routes: Routes = [
  // {path:'', component:NavbarComponent},
  {path:'home',component:HomeComponent},
  {path: '', component: LandingPageComponent },
  {path:'writeblog',component:WriteBlogComponent},
  {path:'category',component:CategoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
