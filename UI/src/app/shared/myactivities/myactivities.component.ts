import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/core/services/activity.service';
import { Activity } from 'src/app/core/models/activity';

@Component({
  selector: 'app-myactivities',
  templateUrl: './myactivities.component.html',
  styleUrls: ['./myactivities.component.css']
})
export class MyactivitiesComponent implements OnInit {

  constructor(
    private activityService: ActivityService
  ) { }

  private activities: Activity[];

  ngOnInit() {
    this.getActivities();
  }

  getActivities() {
    this.activityService.getAll().subscribe(res => {
      // tslint:disable-next-line: no-string-literal
      this.activities = res['data'];
    });
  }

}
