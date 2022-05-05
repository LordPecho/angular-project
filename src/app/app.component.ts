import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-project';

  navElements$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.snapshot.data;
  }

  ngOnInit(): void {
    this.navElements$.next([])
  }
}
