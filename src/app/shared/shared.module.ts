import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuHeaderComponent } from './components/qu-header/qu-header.component';
import { QuContentComponent } from './components/qu-content/qu-content.component';



@NgModule({
  declarations: [
    QuHeaderComponent,
    QuContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QuHeaderComponent,
    QuContentComponent
  ]
})
export class SharedModule { }
