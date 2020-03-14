import { Component, OnInit } from '@angular/core';
import { ExistingApplicationsService } from 'src/app/core/services/existing-applications.service';
import { ExistingApplications } from 'src/app/core/models/existing-applications';

@Component({
  selector: 'app-existing-activities',
  templateUrl: './existing-activities.component.html',
  styleUrls: ['./existing-activities.component.css']
})
export class ExistingActivitiesComponent implements OnInit {

  constructor(
    private existingApplicationsService: ExistingApplicationsService
  ) { }

  private existingApplications: ExistingApplications[];

  ngOnInit() {
    this.getExistingApplications();
  }

  getExistingApplications() {
    this.existingApplicationsService.getAll().subscribe(res => {
      // tslint:disable-next-line: no-string-literal
      this.existingApplications = res['data'];
    });
  }

}
