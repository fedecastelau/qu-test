import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { QuTableColumn } from 'src/app/shared/components/qu-table/interfaces/qu-table-column.interface';
import { APP_CONTANTS } from 'src/app/shared/constants/app.constants';
import { Planet } from '../interfaces/planet.interface';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {
  planetsData;
  planetsListColumns: QuTableColumn[];

  page: number = 1;

  constructor(
    private planetsService: PlanetsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.planetsListColumns = [
      { id: 'name', title: 'Title' },
      { id: 'climate', title: 'Climate' },
      { id: 'gravity', title: 'Gravity' },
      { id: 'orbital_period', title: 'Orbital Period' },
      { id: 'population', title: 'Population' },
      { id: 'diameter', title: 'Diameter' },
      { id: 'edited', title: 'Edited' },
      { id: 'created', title: 'Created' },
    ]
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async ({ page }) => {
      try {
        if (page) {
          this.page = Number(page);
        }

        this.planetsData = await this.getPlanets(this.page);

      } catch {
        alert(APP_CONTANTS.DEFAULT_ERROR_MSG);
      }
    });
  }

  handleGoToPageEventFromTable(page) {
    this.router.navigate(['planets'], { queryParams: { page: page } })
  }

  handleViewDetailsFromTable(planet: Planet) {
    const id = this.getIdFromPlanetUrl(planet.url);

    this.router.navigate(['planets', Number(id)])
  }

  private async getPlanets(page: number) {
    return this.planetsService.getAll$(page).toPromise();
  }

  private getIdFromPlanetUrl(url: string) {
    return url.split('/')
      .filter(i => i !== '')
      .slice(-1);
  }
}
