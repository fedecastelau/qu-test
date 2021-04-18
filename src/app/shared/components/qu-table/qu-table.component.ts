import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SwapiList } from '../../interfaces/swapi.list.interface';
import { QuTableColumn } from './interfaces/qu-table-column.interface';

@Component({
  selector: 'qu-table',
  templateUrl: './qu-table.component.html',
  styleUrls: ['./qu-table.component.scss']
})
export class QuTableComponent implements OnInit {
  @Input() columns: QuTableColumn[] = [];
  @Input() data: SwapiList;

  @Output() customEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
