import { Component, OnInit,OnDestroy , ViewChild} from '@angular/core';
import {AuthService} from "./auth.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {MdButton} from '@angular/material';

@Component({
  selector: 'os-header',
  templateUrl: 'header.component.html',
  styles: ['header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy  {
  @ViewChild('InputForm') inputForm: HTMLFormElement;

  isAuthenticated = false;
  private subscription: Subscription;
  constructor(private authService : AuthService, private router : Router ){
    this.subscription = this.authService.isAuthenticated().subscribe(
      authStatus => this.isAuthenticated = authStatus
    );
  }

  isAuth(){
    return this.isAuthenticated;
  }

  onLogout(){
    this.authService.signout();
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}



