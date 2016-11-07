import { Component, OnInit,OnDestroy } from '@angular/core';
import {AuthService} from "./auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'os-user-header',
  template: `
   <button >Signin</button>
    <button >Signup</button>
    <button >User Profile</button>
    <button >logout</button>
  `,
  styles: []
})
export class UserHeaderComponent implements OnInit, OnDestroy {
isAuthenticated = false;
  private subscription: Subscription;
  constructor(private authService : AuthService) {
    this.subscription = this.authService.isAuthenticated().subscribe(
      authStatus => this.isAuthenticated = authStatus
    );
  }

  isAuth(){
    return this.isAuthenticated;
  }

  onLogout(){
    this.authService.signout();
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
