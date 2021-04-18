import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

      if (page) {
        this.page = Number(page);
      }

      this.planetsData = await this.getPlanets(this.page);
    });
  }

  handleGoToPageEventFromTable(page) {
    this.router.navigate(['planets'], { queryParams: { page: page } })
  }

  private async getPlanets(page: number) {
    return this.planetsService.getAll$(page).toPromise();
  }
}
