import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';

import {AdminAppModule} from './modules/admin/admin-app.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
