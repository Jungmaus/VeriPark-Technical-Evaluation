import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Announcement } from '../models/announcement';
import { Observable } from 'rxjs';
import { AnnouncementAddResult } from '../models/api/announcementAddResult';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  private API_URL = environment.apiUrl;
  private headers: HttpHeaders;

  constructor(
    private httpClient: HttpClient
  ) {
    this.getHeaders();
  }

  getHeaders() {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }

  get(): Observable<Announcement[]> {
    return this.httpClient.get<Announcement[]>(`${this.API_URL}/Announcement`);
  }

  post(announcement: Announcement): Observable<AnnouncementAddResult> {
    return this.httpClient.post<AnnouncementAddResult>(`${this.API_URL}/Announcement`, announcement);
  }

}
