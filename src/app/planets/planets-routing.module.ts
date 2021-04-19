import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';

const routes: Routes = [
  { path: '', component: PlanetsListComponent },
  { path: ':planetId', component: PlanetDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
