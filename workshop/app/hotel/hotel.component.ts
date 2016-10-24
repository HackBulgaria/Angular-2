import { Component, Input } from '@angular/core';

@Component({
    selector: 'hotel',
    template: `
    <h3>{{name}}</h3>
    <rating rating="3" (newRating)="newRatingHandler($event)"></rating>
    `
}) export class HotelComponent {
    @Input() name:string;

    newRatingHandler(data:number) {
        console.log(data);
    }
}