import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullRequestsOverviewPageComponent } from './pull-requests-overview-page.component';

describe('PullRequestsOverviewPageComponent', () => {
  let component: PullRequestsOverviewPageComponent;
  let fixture: ComponentFixture<PullRequestsOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullRequestsOverviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRequestsOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
