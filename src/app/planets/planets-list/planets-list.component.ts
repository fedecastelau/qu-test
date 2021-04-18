import { Component, OnInit } from '@angular/core';
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

  constructor(
    private planetsService: PlanetsService
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

  async ngOnInit(): Promise<void> {
    this.planetsData = await this.getPlanets();
  }

  private async getPlanets() {
    return this.planetsService.getAll$().toPromise();
  }
}
