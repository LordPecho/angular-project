import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PullRequestsOverviewPageComponent } from './pull-requests-overview-page.component';

const routes: Routes = [
{  path: '',
  component: PullRequestsOverviewPageComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PullRequestsOverviewPageRoutingModule { }
