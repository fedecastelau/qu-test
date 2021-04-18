import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuHeaderComponent } from './components/qu-header/qu-header.component';



@NgModule({
  declarations: [QuHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [QuHeaderComponent]
})
export class SharedModule { }
