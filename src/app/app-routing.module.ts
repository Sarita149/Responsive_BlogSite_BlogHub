import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './allComponents/home/home.component';
import { LandingPageComponent } from './allComponents/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  // {path:'', component:NavbarComponent},
  {path:'home',component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
