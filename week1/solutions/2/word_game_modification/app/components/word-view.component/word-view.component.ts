import { Component, Input } from '@angular/core';
import { Letter } from '../letter.component/letter.component';

@Component({
    selector: 'word-view',
    styles: [`
        ul#word-view {
            padding-left: 0px;
        }

        ul#word-view li {
            display: inline-block;
            margin: 6px;
        }
    `],
    template: `
    <ul id="word-view">
        <li *ngFor="let letter of letterArray; let i = index;">
            <letter [letter]="letter" [selected]="hiddenLetterMap[i]">
                {{letter}}
            </letter>
        </li>
    </ul>
    `
})
export class WordView {
    hiddenLetterMap:boolean[];
    @Input() letterArray:string;
    @Input() set hiddenLetterArray(value:string[]) {
        this.hiddenLetterMap = [];
        value.forEach((letter) => {
            let index = this.letterArray.indexOf(letter); 
            this.hiddenLetterMap[index] = true; 
        });
    };

    unhideLetter(letter) {
        let index = this.letterArray.indexOf(letter);
        this.hiddenLetterMap[index] = false;
    }
}