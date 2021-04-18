import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuHeaderComponent } from './components/qu-header/qu-header.component';
import { QuContentComponent } from './components/qu-content/qu-content.component';
import { QuTableComponent } from './components/qu-table/qu-table.component';



@NgModule({
  declarations: [
    QuHeaderComponent,
    QuContentComponent,
    QuTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QuHeaderComponent,
    QuContentComponent,
    QuTableComponent
  ]
})
export class SharedModule { }
