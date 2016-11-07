import {Component, OnInit, OnDestroy} from '@angular/core';
import {UserProfile} from "../../admin/shared/models";
import {AuthService} from "../shared/auth.service";
import {UserService} from "../shared/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'os-profile',
  template:`
<p>
  profile works!
</p>
`,
  styles: []
})
export class ProfileComponent implements OnInit, OnDestroy {

  private isAuthenticated = false;
  private Subscription : Subscription;
  userProfile= <UserProfile>{};
  constructor(private auth: AuthService,
              private userService: UserService
  ) {
    //subscribe to auth.isAuthenticated()
    // this.Subscription = this.auth.isAuthenticated().subscribe(
    //   authStatus =>  this.isAuthenticated =  authStatus
    // );
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    //this.Subscription.unsubscribe();
  }
}
