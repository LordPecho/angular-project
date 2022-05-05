// ANGULAR
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// APP
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { IssueOverviewPageModule } from '../issue-overview-page/issue-overview-page.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],

  imports: [
    CommonModule,
    HomePageRoutingModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],

  exports:[
    HomePageComponent
  ],
})
export class HomePageModule { }
