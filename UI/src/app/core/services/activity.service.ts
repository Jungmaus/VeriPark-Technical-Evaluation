import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Activity } from '../models/activity';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private API_URL = environment.activityApiUrl;

  getAll(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(this.API_URL);
  }

}
