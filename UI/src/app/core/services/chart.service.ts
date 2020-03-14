import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Chart } from 'src/app/core/models/chart';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private API_URL = environment.chartApiUrl;

  get(): Observable<Chart> {
    return this.httpClient.get<Chart>(this.API_URL);
  }

}
