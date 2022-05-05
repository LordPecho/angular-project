import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PullRequestsOverviewPageRoutingModule } from './pull-requests-overview-page-routing.module';
import { PullRequestsOverviewPageComponent } from './pull-requests-overview-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { HomePageModule } from '../home-page/home-page.module';


@NgModule({
  declarations: [
    PullRequestsOverviewPageComponent
  ],
  imports: [
    CommonModule,
    PullRequestsOverviewPageRoutingModule,
  ]
})
export class PullRequestsOverviewPageModule { }
