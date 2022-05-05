import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueOverviewPageRoutingModule } from './issue-overview-page-routing.module';
import { IssueOverviewPageComponent } from './issue-overview-page.component';
import { HomePageModule } from '../home-page/home-page.module';


@NgModule({
  declarations: [
    IssueOverviewPageComponent
  ],
  imports: [
    CommonModule,
    IssueOverviewPageRoutingModule,
  ]

})
export class IssueOverviewPageModule { }
