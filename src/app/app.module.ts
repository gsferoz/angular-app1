import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import * from '@angular/material';
// import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatTableModule, MatPaginatorModule} from '@angular/material';

import 'hammerjs';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { WorklistComponent } from './worklist/worklist.component';


@NgModule({
  declarations: [
    AppComponent, HeaderComponentComponent, WorklistComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatTableModule, MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
