import { Component, OnInit,OnDestroy } from '@angular/core';
import {AuthService} from "./auth.service";
import {Subscription} from "rxjs";
import {} from '@angular/router';
@Component({
  selector: 'os-user-header',
  template: `
   <button [routerLink]="['signin']"  routerlinkactive="active-link" >Signin</button>
    <button  [routerLink]="['signup']"  routerlinkactive="active-link" >Signup</button>
    <button *ngIf="isAuthenticated"  [routerLink]="['profile']"  routerlinkactive="active-link" >User Profile</button>
    <button (click)="onLogout()">logout</button>
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
