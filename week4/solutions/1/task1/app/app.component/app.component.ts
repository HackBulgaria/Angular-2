import { Component, ViewChild, ElementRef } from '@angular/core';
import { WordService } from '../word/word.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app',
    template: 
    `
    <div *ngIf="error" class="error">Network error!</div>
    <div *ngIf="!error">
        {{currentWord}}
        <button (click)="loadNext()">LoadNext</button>
    </div>
    `,
    providers: [ WordService ]
}) export class App {
    currentWord:string;
    error:Error;
    
    private getRandomNumber(min:number, max:number):number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    constructor(private _WordService:WordService) {
        this._WordService.newWordSubscription(this.getRandomNumber).subscribe((theWord:string) => {
             this.currentWord = theWord;
        }, (err) => { 
            this.error = err; 
        });
    }

    loadNext = this._WordService.loadNewWord;
}