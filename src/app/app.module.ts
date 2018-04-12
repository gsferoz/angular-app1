import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import * from '@angular/material';
// import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';


import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';


@NgModule({
  declarations: [
    AppComponent, HeaderComponentComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
