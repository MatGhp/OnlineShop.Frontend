import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
// Eager load these Modules
import {UserModule} from "./modules/userprofile/user.module";
import {HomeComponent} from "./home.component";
import { DoublePipe } from './shared/double.pipe';
//TODO : Lazy Load these Modules :





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoublePipe



  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule,

    UserModule,

    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'admin', loadChildren:'app/modules/admin/admin-app.module#AdminAppModule'},
      { path: '**', redirectTo: 'home' }
    ])

    //MdCoreModule, MdCardModule, MdButtonModule, MdRadioModule,
    //MdCheckboxModule, MdTooltipModule, MdSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
