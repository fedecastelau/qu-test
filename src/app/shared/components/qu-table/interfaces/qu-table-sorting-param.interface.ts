import { QuTableSortOrderEnum } from "../enums/qu-table-sort-order.enum";

export interface QuTableSortingParam {
    columnId: string,
    order: QuTableSortOrderEnum
}