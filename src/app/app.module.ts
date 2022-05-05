import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { IssuesService } from './Services/issues.service';
import { PullService } from './Services/pull.service';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,

  ],
  providers: [
    IssuesService,
    PullService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
