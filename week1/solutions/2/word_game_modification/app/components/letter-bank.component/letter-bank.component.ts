import { Component, Input } from '@angular/core';
import { Letter } from '../letter.component/letter.component';

@Component({
    selector: 'letter-bank',
    template: `
    <div class="letter-bank">
        <ng-content select=".title"></ng-content>
        <ng-content select="letter"></ng-content>
    </div>
    `
})
export class LetterBank {
    letterClicked(letterComponent:Letter) {
        letterComponent.isSelected = true;
    }
}