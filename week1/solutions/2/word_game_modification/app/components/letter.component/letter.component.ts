import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'letter',
    template: `
    <div class="letter" (click)="clickHandler()" [ngClass]="{ selected: isSelected && !correct, marked: isSelected && correct }">
        <ng-content></ng-content>
    </div>
    `,
    styles: [
        `
        div.letter.selected:before {
            content: "_";
            height: 20px;
            position: absolute;
            color: black;
            background-color: white;
        }
        div.letter.marked {
            color: #4be420 !important;
        }
        div.letter {
            display: inline-block;
            font-size: 20px;
            width: 20px;
            cursor: pointer;
            border: 1px solid transparent;
            text-align: center;
        }
        div.letter:hover {
            border: 1px solid black;
        }
        `
    ]
}) 
export class Letter {
    @Input('selected') isSelected:boolean = false;
    @Input() correct:boolean = false;
    @Input() letter:string;
    @Output('clicked') clickedEmitter = new EventEmitter<Letter>();

    clickHandler() {
        if(this.isSelected || !this.correct) return console.log('Letter already selected or incorrect!');
        this.isSelected = true;
        this.clickedEmitter.emit(this);
    }
}