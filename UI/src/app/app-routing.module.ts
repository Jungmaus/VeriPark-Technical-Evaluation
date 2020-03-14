import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { announcementRoutes } from './pages/announcement/announcement-routing.module';
import { ActivityDetailComponent } from './pages/activity-detail/activity-detail.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      pageTitle: 'Dashboard'
    }
  },
  {
    path: 'activity/detail',
    component: ActivityDetailComponent,
    data: {
      pageTitle: 'Activity Detail'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(announcementRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
