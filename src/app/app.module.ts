import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';


import {MdCoreModule} from "@angular2-material/core";
import {MdCardModule} from "@angular2-material/card";
import {MdButtonModule} from "@angular2-material/button";
import {MdRadioModule} from "@angular2-material/radio";
import {MdCheckboxModule} from "@angular2-material/checkbox";
import {MdTooltipModule} from "@angular2-material/tooltip";
import {MdSliderModule} from "@angular2-material/slider";
import 'hammerjs';
// Eager load these Modules
import {UserModule} from "./modules/user/user.module";
import {HomeComponent} from "./home.component";
//TODO : Lazy Load these Modules :





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,

    UserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'admin', loadChildren:'app/modules/admin/admin-app.module#AdminAppModule'},
      { path: '**', redirectTo: 'home' }
    ]),

    MdCoreModule, MdCardModule, MdButtonModule, MdRadioModule,
    MdCheckboxModule, MdTooltipModule, MdSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
