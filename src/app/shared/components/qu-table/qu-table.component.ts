import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { SwapiList } from '../../interfaces/swapi.list.interface';
import { QuTableColumn } from './interfaces/qu-table-column.interface';

@Component({
  selector: 'qu-table',
  templateUrl: './qu-table.component.html',
  styleUrls: ['./qu-table.component.scss']
})
export class QuTableComponent {
  @Input() columns: QuTableColumn[] = [];
  @Input() data: SwapiList;
  @Input() page: number;

  @Output() goToPage = new EventEmitter();

  constructor() { }

  handleNextPage() {
    this.goToPage.emit(this.page + 1)
  }

  handlePreviousPage() {
    this.goToPage.emit(this.page - 1)
  }
}
