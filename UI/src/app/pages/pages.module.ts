import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { AnnouncementsComponent } from '../shared/announcements/announcements.component';
import { ChartsComponent } from '../shared/charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from '../shared/pie-chart/pie-chart.component';
import { BarChartComponent } from '../shared/bar-chart/bar-chart.component';
import { MyactivitiesComponent } from '../shared/myactivities/myactivities.component';
import { ExistingActivitiesComponent } from '../shared/existing-activities/existing-activities.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AnnouncementAddComponent } from './announcement/announcement-add/announcement-add.component';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  declarations: [
    DashboardComponent,
    AnnouncementsComponent,
    ChartsComponent,
    PieChartComponent,
    BarChartComponent,
    MyactivitiesComponent,
    ExistingActivitiesComponent,
    AnnouncementAddComponent,
    ActivityDetailComponent
  ],
  exports: [
    DashboardComponent,
    AnnouncementsComponent,
    ChartsComponent,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class PagesModule { }
