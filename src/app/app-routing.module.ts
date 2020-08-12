import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component'
const routes: Routes = [
  {path:'',component:SigninComponent},
  {path:'userRegistration',component:UserRegisterationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
