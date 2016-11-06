import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';

import {AdminAppModule} from './modules/admin/admin-app.module';
import {MdCoreModule} from "@angular2-material/core";
import {MdCardModule} from "@angular2-material/card";
import {MdButtonModule} from "@angular2-material/button";
import {MdRadioModule} from "@angular2-material/radio";
import {MdCheckboxModule} from "@angular2-material/checkbox";
import {MdTooltipModule} from "@angular2-material/tooltip";
import {MdSliderModule} from "@angular2-material/slider";
import 'hammerjs';
import {UserModule} from "./modules/user/user.module";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,

    AdminAppModule,
    UserModule,
    RouterModule.forRoot([

      { path: '', component: AppComponent},
      { path: '**', component: AppComponent }
    ]),

    MdCoreModule, MdCardModule, MdButtonModule, MdRadioModule,
    MdCheckboxModule, MdTooltipModule, MdSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
