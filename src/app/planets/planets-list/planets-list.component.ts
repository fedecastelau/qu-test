import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuTableColumn } from 'src/app/shared/components/qu-table/interfaces/qu-table-column.interface';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {
  planetsData;
  planetsListColumns: QuTableColumn[];

  page: number;

  constructor(
    private planetsService: PlanetsService,
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
      this.page = page | 1;

      this.planetsData = await this.getPlanets(this.page);
    });
  }

  private async getPlanets(page: number) {
    return this.planetsService.getAll$(page).toPromise();
  }
}
