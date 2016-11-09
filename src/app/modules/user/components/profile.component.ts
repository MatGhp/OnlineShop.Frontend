import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import {MdSidenav, MdDialog, MdDialogConfig} from "@angular/material";

import {UserProfile} from "../../admin/shared/models";
import {AuthService} from "../shared/auth.service";
import {UserService} from "../shared/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'os-profile',
  templateUrl: './profile.component.html' ,
  styles: []
})
export class ProfileComponent implements OnInit, OnDestroy {

  private isAuthenticated = false;
  private Subscription: Subscription;
  userProfile = <UserProfile>{};

  constructor(private auth: AuthService,
              private userService: UserService) {
    //subscribe to auth.isAuthenticated()
    // this.Subscription = this.auth.isAuthenticated().subscribe(
    //   authStatus =>  this.isAuthenticated =  authStatus
    // );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    //this.Subscription.unsubscribe();
  }
}
