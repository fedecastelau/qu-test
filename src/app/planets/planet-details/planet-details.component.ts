import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from '../interfaces/planet.interface';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {
  planetId: number;
  planet: Planet;

  constructor(
    private route: ActivatedRoute,
    private planetsService: PlanetsService
  ) { }

  async ngOnInit(): Promise<void> {
    this.planetId = this.route.snapshot.params.planetId;
    this.planet = await this.getPlanet(this.planetId);
  }

  private getPlanet(id: number) {
    return this.planetsService.get$(id).toPromise();
  }
}
