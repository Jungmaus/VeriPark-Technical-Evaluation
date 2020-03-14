import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingActivitiesComponent } from './existing-activities.component';

describe('ExistingActivitiesComponent', () => {
  let component: ExistingActivitiesComponent;
  let fixture: ComponentFixture<ExistingActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
