import { SwapiList } from "src/app/shared/interfaces/swapi.list.interface";
import { Planet } from "./planet.interface";

export interface PlanetsListResponse extends SwapiList {
    results: Planet[];
}