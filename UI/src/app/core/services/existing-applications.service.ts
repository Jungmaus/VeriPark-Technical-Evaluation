import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ExistingApplications } from '../models/existing-applications';

@Injectable({
  providedIn: 'root'
})
export class ExistingApplicationsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private API_URL = environment.existingApplicationApiUrl;

  getAll(): Observable<ExistingApplications[]> {
    return this.httpClient.get<ExistingApplications[]>(this.API_URL);
  }

}
