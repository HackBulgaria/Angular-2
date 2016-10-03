import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { WordService } from '../word/word.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/mergeMap';

@Component({
    selector: 'app',
    template: 
    `
    <div *ngIf="error" class="error">Network error!</div>
    <div *ngIf="!error">
        <input type="text" #filterInput placeholder="Search">
        <h4>Result:</h4>
        <ul>
            <li *ngFor="let word of filterResult$ | async">{{word}}</li>
        </ul>
    </div>
    `,
    providers: [ WordService ]
}) export class App implements AfterViewInit{
    @ViewChild('filterInput') filterInput:ElementRef;
    filterResult$:Observable<string[]>;
    currentWord:string;
    error:Error;
    
    private getRandomNumber(min:number, max:number):number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    constructor(private _WordService:WordService) { }

    ngAfterViewInit() {
        this.filterResult$ = Observable.fromEvent(this.filterInput.nativeElement, 'keyup')
            .mergeMap(() => this._WordService.filter(this.filterInput.nativeElement.value));
    }
}