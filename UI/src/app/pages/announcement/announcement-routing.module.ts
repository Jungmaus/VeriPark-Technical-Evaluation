import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AnnouncementAddComponent } from './announcement-add/announcement-add.component';

export const announcementRoutes: Routes = [
  {
    path: 'announcement/add',
    component: AnnouncementAddComponent,
    data: {
      pageTitle: 'Add Announcement'
    }
  }
];


