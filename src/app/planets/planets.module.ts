import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PlanetsListComponent],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    SharedModule
  ]
})
export class PlanetsModule { }
