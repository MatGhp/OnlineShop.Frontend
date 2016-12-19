import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {AuthService} from "../../userprofile/shared/auth.service";
//import {AuthService} from "./auth.service";

@Injectable()
export class AdminAuthGuard implements CanActivate{

  constructor(private authService : AuthService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if(!this.authService.isAuthenticated().first())
    {return false;}
    return true;
  }

}
