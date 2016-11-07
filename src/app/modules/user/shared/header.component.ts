import { Component, OnInit,OnDestroy , ViewChild} from '@angular/core';
import {AuthService} from "./auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'os-header',
  templateUrl: 'header.component.html',
  styles: [`#login-nav input { margin-bottom: 15px;`]
})
export class HeaderComponent implements OnInit, OnDestroy  {
  @ViewChild('InputForm') inputForm: HTMLFormElement;

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



