import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'rating',
    styles: [
        `ul#rating li{
            display: inline-block;
            vertical-align: middle;
        }
        img {
            width: 20px;
            margin: 1px;
        }
        `
    ],
    template: `
    <ul id="rating">
        <li *ngFor="let num of stars; let i = index" (click)="click(i)" (mouseover)="mouseover(i)" (mouseout)="mouseout()">
            <img *ngIf="!isFilled(i)" src="/img/star-empty.png" alt="star-e">
            <img *ngIf="isFilled(i)" src="/img/star-fill.png" alt="star-f">
        </li>
    </ul>
    `
}) export class RatingComponent {
    stars:number[] = Array(5).fill(null).map((val, i) => i);
    currentIndex:number;

    @Output('newRating') newRatingEmitter = new EventEmitter<number>();
    @Input() set rating(value:number) {
        this.currentIndex = --value;
        this.isClicked = true;
    }
    
    isClicked:boolean = false;

    isFilled = (i) => this.currentIndex >= i; 

    click(index) {
        this.newRatingEmitter.emit(this.isClicked ? 0: index + 1);
        if(this.isClicked) {
            this.isClicked = false;
            this.currentIndex = -1;
            return;
        }
        this.isClicked = true;
        this.currentIndex = index;
    }

    mouseover(index) {
        if(!this.isClicked) this.currentIndex = index;
    }

    mouseout() {
        if(!this.isClicked) this.currentIndex = -1;
    }
}