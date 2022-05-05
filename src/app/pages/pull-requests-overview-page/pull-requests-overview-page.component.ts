import { Component, OnInit, ViewChild } from '@angular/core';
import { PullService } from 'src/app/Services/pull.service';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-pull-requests-overview-page',
  templateUrl: './pull-requests-overview-page.component.html',
  styleUrls: ['./pull-requests-overview-page.component.scss']
})
export class PullRequestsOverviewPageComponent implements OnInit {

  constructor(
    private pullService: PullService,
  ) { }

  ngOnInit(): void {

  }

}
