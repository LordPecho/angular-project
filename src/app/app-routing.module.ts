import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';




const routes: Routes = [
  {
    component: LayoutComponent,
    path: 'public',
    children: [
      // pages domen
    ],
    data: {
      navElements: []
    }
  },
  {
    component: LayoutComponent,
    path: '',
    children: [
      {
        path: 'issues',
        loadChildren: () => import('./pages/issue-overview-page/issue-overview-page.module').then(m => m.IssueOverviewPageModule),
      },
      {
        path: 'pull-request',
        loadChildren: () => import('./pages/pull-requests-overview-page/pull-requests-overview-page.module').then(m => m.PullRequestsOverviewPageModule),
      },
      {
        path: '',
        loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule),
      },
    ]
  },

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
