import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { HotelComponent } from './hotel.component';
import { RatingComponent } from './rating.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ RatingComponent, HotelComponent ],
    providers: [  ],
    exports: [ HotelComponent ]
}) export class HotelModule {

}