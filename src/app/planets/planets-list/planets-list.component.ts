import { Component, OnInit } from '@angular/core';
import { Planet } from '../interfaces/planet.interface';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {
  planetsData;

  constructor(
    private planetsService: PlanetsService
  ) { }

  async ngOnInit(): Promise<void> {
    this.planetsData = await this.getPlanets();
  }

  private async getPlanets() {
    return this.planetsService.getAll$().toPromise();
  }
}
