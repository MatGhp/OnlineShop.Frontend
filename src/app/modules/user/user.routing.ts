import {Routes, RouterModule} from "@angular/router";
import {SigninComponent} from "./components/signin.component";
import {SignupComponent} from "./components/signup.component";
import {ProfileComponent} from "./components/profile.component";
import {NgModule} from "@angular/core";

const USER_ROUTES: Routes = [
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: ProfileComponent}
];





@NgModule({
  imports: [RouterModule.forChild(USER_ROUTES)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}

export const UserRoutedComponents = [
  SigninComponent,
  SignupComponent,
  ProfileComponent
];


