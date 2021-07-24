import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './allComponents/category/category.component';
import { HomeComponent } from './allComponents/home/home.component';
import { LandingPageComponent } from './allComponents/landing-page/landing-page.component';
import { ViewBlogComponent } from './allComponents/view-blog/view-blog.component';
import { WriteBlogComponent } from './allComponents/write-blog/write-blog.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  // {path:'', component:NavbarComponent},
  { path: '', component: LandingPageComponent },
  { path: 'read/:id', component: ViewBlogComponent },
  { path: 'home', component: HomeComponent },
  { path: 'writeblog', component: WriteBlogComponent,canActivate:[AuthenticationGuard] },
  { path: 'category', component: CategoryComponent },
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
