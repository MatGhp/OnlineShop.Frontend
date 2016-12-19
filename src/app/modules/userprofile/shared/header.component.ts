import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {AuthService} from "./auth.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {MdButton, MdDialog, MdDialogConfig} from '@angular/material';
import {SettingsComponent} from "./settings.component";

@Component({
  selector: 'os-header',
  templateUrl: 'header.component.html',
  styles: ['header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy  {
  @ViewChild('InputForm') inputForm: HTMLFormElement;
  isDarkTheme : Boolean = false;
  isAuthenticated = false;
  private subscription: Subscription;
  constructor(private authService : AuthService,
              private router : Router,
              public dialog : MdDialog,
              public vcr: ViewContainerRef
  ){
    this.subscription = this.authService.isAuthenticated().subscribe(
      authStatus => this.isAuthenticated = authStatus
    );
  }

  openDialog(){
    const config = new  MdDialogConfig();
    config.viewContainerRef =  this.vcr;
    this.dialog.open(SettingsComponent, config);
  }

  onChangeTheme(){
    this.isDarkTheme = !this.isDarkTheme;
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



