import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { SharedModule } from '../shared/shared.module';
import { PlanetsService } from './planets.service';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';


@NgModule({
  declarations: [PlanetsListComponent, PlanetDetailsComponent],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    SharedModule
  ],
  providers: [PlanetsService]
})
export class PlanetsModule { }
