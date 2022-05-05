import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueOverviewPageComponent } from './issue-overview-page.component';

const routes: Routes = [
    {
      path:'',
      component: IssueOverviewPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssueOverviewPageRoutingModule { }
