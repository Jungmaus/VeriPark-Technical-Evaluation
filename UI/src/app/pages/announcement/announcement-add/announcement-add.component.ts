import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Announcement } from 'src/app/core/models/announcement';
import { AnnouncementTypeEnum } from 'src/app/core/enums/announcementType';
import { SnackbarService } from 'src/app/core/services/snackbar.service';
import { AnnouncementService } from 'src/app/core/services/announcement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announcement-add',
  templateUrl: './announcement-add.component.html',
  styleUrls: ['./announcement-add.component.css']
})

export class AnnouncementAddComponent implements OnInit {


  public ActivityTypeEnum = AnnouncementTypeEnum;

  constructor(
    private formBuilder: FormBuilder,
    private snackBarService: SnackbarService,
    private announcementService: AnnouncementService,
    private router: Router
  ) { }

  public showPreviousButton = true;
  public announcementAddForm: FormGroup;
  private announcement: Announcement;

  ngOnInit() {
    this.announcement = new Announcement();
    this.createForm();
  }

  goPreviousPage() {
    this.router.navigate(['']);
  }

  createForm() {
    this.announcementAddForm = this.formBuilder.group({
      title: new FormControl(
        this.announcement.title, [
        Validators.required,
        Validators.maxLength(25),
      ]),
      description: new FormControl(
        this.announcement.description, [
        Validators.required,
        Validators.maxLength(125),
      ]),
      date: new FormControl(
        this.announcement.date, [
        Validators.required
      ]
      ),
      type: new FormControl(
        this.announcement.announcementType, [
        Validators.required
      ]
      )
    });
  }

  addAnnouncement() {
    if (this.announcementAddForm.valid) {
      this.announcementService.post(this.announcement).subscribe(res => {
        // tslint:disable-next-line: no-string-literal
        if (res['isSuccess'] === true) {
          this.announcement = new Announcement();
          this.announcementAddForm.reset();
          this.snackBarService.openSnackBar('Announcement added sucessfully.', 'Close');
        } else {
          this.snackBarService.openSnackBar('Something went wrong..', 'Close');
        }
      });
    }
  }

}
