import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerDirective } from './pager.directive';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PagerDirective, GridComponent],
  exports: [GridComponent]
})
export class DirectivesModule { }
