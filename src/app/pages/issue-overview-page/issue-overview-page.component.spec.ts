import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueOverviewPageComponent } from './issue-overview-page.component';

describe('IssueOverviewPageComponent', () => {
  let component: IssueOverviewPageComponent;
  let fixture: ComponentFixture<IssueOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueOverviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
