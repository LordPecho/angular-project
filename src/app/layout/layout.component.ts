import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IssuesService } from '../Services/issues.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  navElements$: BehaviorSubject<any> = new BehaviorSubject([]);
  public viewMode: string;



  constructor(
    private router: Router,
    private renderer: Renderer2,
    private issuesService: IssuesService
  ) { }

  ngOnInit(): void {
    // subscire na promjene u nav element behaviour subject
  }

  public navigate(item: any) {
    this.router.navigate(item)
    ;
  }



  }


