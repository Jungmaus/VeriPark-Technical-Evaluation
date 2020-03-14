import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Announcement } from 'src/app/core/models/announcement';
import { AnnouncementService } from 'src/app/core/services/announcement.service';
import { AnnouncementTypeEnum } from 'src/app/core/enums/announcementType';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  public AnnouncementTypeEnum = AnnouncementTypeEnum;

  constructor(
    private router: Router,
    private announcementService: AnnouncementService,
  ) { }

  private announcements: Announcement[];

  ngOnInit() {
    this.getAnnouncements();
  }

  getAnnouncements() {
    this.announcementService.get().subscribe(data => {
      this.announcements = data;
    });
  }

  goAddPage() {
    this.router.navigate(['/announcement/add']);
  }

}
