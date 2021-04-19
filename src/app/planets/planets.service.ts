import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Planet } from './interfaces/planet.interface';
import { PlanetsListResponse } from './interfaces/planets-list.response.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private apiUrl: string = environment.swapiUrl;
  private planetsUrl = `${this.apiUrl}/planets`;

  constructor(private http: HttpClient) { }

  getAll$(page: number = 1) {
    return this.http.get<PlanetsListResponse>(this.planetsUrl, {
      params: {
        page: String(page)
      }
    });
  }

  get$(id: number) {
    return this.http.get<Planet>(`${this.planetsUrl}/${id}`,);
  }
}
