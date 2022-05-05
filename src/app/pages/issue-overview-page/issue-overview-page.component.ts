import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { IssuesDOM, IssuesDTO } from 'src/app/models/issues.model';
import { IssuesService } from 'src/app/Services/issues.service';
import { HomePageComponent } from '../home-page/home-page.component';



@Component({
  selector: 'app-issue-overview-page',
  templateUrl: './issue-overview-page.component.html',
  styleUrls: ['./issue-overview-page.component.scss'],
})
export class IssueOverviewPageComponent implements OnInit{

  //var
  public issueList: IssuesDOM[] = [];

  // sub
  private subscription: Subscription = new Subscription();


  constructor(
    private issuesService: IssuesService,
  )
  { }


  ngOnInit(): void {
    this.subscription.add(this.issuesService.getAll().subscribe((issuesDtoList: IssuesDTO []) => {
      issuesDtoList.forEach((issuesDto: IssuesDTO) => {
        this.issueList.push(new IssuesDOM(issuesDto));
      })
    }));
  }


  }



