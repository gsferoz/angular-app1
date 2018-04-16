import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import * from '@angular/material';
// import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatCardModule,
   MatCheckboxModule, MatInputModule, 
   MatTableModule, MatPaginatorModule} from '@angular/material';

import 'hammerjs';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { WorklistComponent } from './worklist/worklist.component';
import { WorlistSlideContent1Component } from './worlist-slide-content1/worlist-slide-content1.component';


@NgModule({
  declarations: [
    AppComponent, HeaderComponentComponent, WorklistComponent, WorlistSlideContent1Component
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule, MatButtonModule, 
    MatCheckboxModule, MatInputModule, MatTableModule, MatPaginatorModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
