import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {
  planetId: number;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.planetId = this.route.snapshot.params.planetId;
  }

}
