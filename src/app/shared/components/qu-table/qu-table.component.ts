import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { orderBy } from 'lodash';
import { SwapiList } from '../../interfaces/swapi.list.interface';
import { QuTableSortOrderEnum } from './enums/qu-table-sort-order.enum';
import { QuTableColumn } from './interfaces/qu-table-column.interface';
import { QuTableSortingParam } from './interfaces/qu-table-sorting-param.interface';

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
  @Output() viewDetails = new EventEmitter();


  buttonTexts = {
    back: '<< Back',
    next: 'Next >>'
  }
  tableContent = [];
  sortingStatus: QuTableSortingParam;

  constructor() { }

  ngOnInit() {
    this.tableContent = [...this.data.results];
    this.sortingStatus = this.getInitialSortingStatus();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.tableContent = [...this.data.results];
      this.sortingStatus = this.getInitialSortingStatus();
    }
  }

  handleNextPage() {
    this.goToPage.emit(this.page + 1)
  }

  handlePreviousPage() {
    this.goToPage.emit(this.page - 1)
  }

  handleColumnSorting(columnId: string) {
    this.sortingStatus = this.getNewSortOrderParams(this.sortingStatus, columnId);

    if (this.sortingStatus.columnId && this.sortingStatus.order) {
      this.tableContent = orderBy(
        this.data.results,
        this.sortingStatus.columnId,
        this.sortingStatus.order,
      )
    } else {
      //reset sorting
      this.tableContent = [...this.data.results];
    }
  }

  handleViewDetailsButton(item) {
    this.viewDetails.emit(item);
  }

  private getInitialSortingStatus(): QuTableSortingParam {
    return {
      columnId: null,
      order: null
    };
  }

  private getNewSortOrderParams(currentStatus: QuTableSortingParam, columnToSort: string): QuTableSortingParam {
    const columnHasBeenAlreadySorted = (currentStatus.columnId === columnToSort);
    const nextSortOrder = {
      [QuTableSortOrderEnum.ASC]: QuTableSortOrderEnum.DESC,
      [QuTableSortOrderEnum.DESC]: null,
    }

    if (!columnHasBeenAlreadySorted) {
      return {
        columnId: columnToSort,
        order: QuTableSortOrderEnum.ASC
      };
    }

    return {
      columnId: columnToSort,
      order: (currentStatus.order) ? nextSortOrder[currentStatus.order] : QuTableSortOrderEnum.ASC
    }
  }
}