import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PlanetsListResponse } from './interfaces/planets-list.response.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private apiUrl: string = environment.swapiUrl;
  private planetsUrl = `${this.apiUrl}/planets`;

  constructor(private http: HttpClient) { }

  getAll$() {
    return this.http.get<PlanetsListResponse>(this.planetsUrl);
  }
}
