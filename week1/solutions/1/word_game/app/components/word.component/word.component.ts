import { Component } from '@angular/core';
import { WordDataStore } from '../../data.store/word-data.store';

class Letter {
    symbol:string;
    selected:boolean = false;
    constructor(letter) {
        this.symbol = letter;
    }
}

@Component({
    selector: 'word',
    template: `
    <div id="word-view" *ngIf="!noWordsInDatastore">
        <ul>
            <li *ngFor="let letter of currentWordArray; let i = index;">
                <span *ngIf="currentHiddenPositions.indexOf(i) === -1">{{letter}}</span>
                <span *ngIf="currentHiddenPositions.indexOf(i) !== -1">_</span>
            </li>
        </ul>
    </div>
    <div id="letter-bank">
        <ul>
            <li *ngFor="let letter of letterBankArray; let i = index;" (click)="letterClick(letter.symbol)">
                <span [ngClass]="{ selected: letter.selected }">{{letter.symbol}}</span>
            </li>
        </ul>
    </div>
    <div id="buttons" *ngIf="showNextBtn">
        <button (click)="loadNextWord()">Next Word</button>
    </div>
    <div *ngIf="noWordsInDatastore" class="error">Word datastore is empty!</div>
    `,
    styles: [`
        .error {
            color:red;
        }
        div#word-view ul li { 
            display: inline-block; 
            margin-left: 5px; 
            margin-right: 5px; 
        }
        div#letter-bank ul li { 
            display: inline-block;
            text-align: center;
            width: 20px;
            height: 20px;
            margin: 5px;
            cursor: pointer;
            border: 1px solid;
        } 
        div#letter-bank ul { 
            width: 130px; 
        }
        div#letter-bank li {
            background-color: white;
            color: black;
            transition: all 500ms ease-out;
        }
        div#letter-bank span.selected {
            background-color: black;
            color: white;
            width: 20px;
            height: 20px;
            display: inline-block;
        }
        div#letter-bank li:active {
            background-color: black;
            color: white;
            transition: all 0s ease-out; 
        }`]
}) export class WordComponent {
    
    dataStore:string[];

    currentWord:string;
    currentWordArray:string[] = [];
    currentHiddenPositions:number[] = [];
    letterBank:{[letter:string]: Letter } = {};
    letterBankArray:Letter[];
    showNextBtn:boolean = false;
    noWordsInDatastore:boolean = false;

    private getRandomNumber(min:number, max:number):number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    private getAllIndexes<T>(arr:T[], val:T):number[] {
        var indexes = [], i = -1;
        while ((i = arr.indexOf(val, i+1)) != -1) {
            indexes.push(i);
        }
        return indexes;
    }

    constructor() {
        this.dataStore = WordDataStore.words;
        this.loadNextWord();
    }
    
    private clear() {
        this.currentWord = undefined;
        this.currentWordArray = [];
        this.currentHiddenPositions = [];
        this.letterBank = {};
        this.letterBankArray = [];
        this.showNextBtn = false;
    }

    loadNextWord() {
        this.clear();

        //if datastore is empty show error
        if(WordDataStore.words.length === 0) return (this.noWordsInDatastore = true);
        
        this.currentWord = WordDataStore.words[this.getRandomNumber(0, WordDataStore.words.length - 1)];
        
        //we want words longer than 3 chars
        if(this.currentWord.length < 3) {
            let index = WordDataStore.words.indexOf(this.currentWord);
            WordDataStore.words.splice(index, 1);
            return this.loadNextWord();
        }

        this.currentWord = this.dataStore[this.getRandomNumber(0, this.dataStore.length - 1)];
        this.currentWordArray = this.currentWord.split('');
        let maxHidden:number = Math.floor(this.currentWord.length - 3);
        let numberOfHidden = this.getRandomNumber(1, maxHidden);
        let difference = 8 - numberOfHidden;
        for(let i = 0; i < numberOfHidden; i++) {
            let position = this.getRandomNumber(0, this.currentWord.length - 1);
            let symbol = this.currentWord[position];
            if(!this.letterBank[symbol]) this.currentHiddenPositions.push(position);
            else difference++;
            this.letterBank[symbol] = new Letter(symbol);
        }
        

        for(let i = 0; i < difference; i++) {
            let letter = new Letter(WordDataStore.alphabet[this.getRandomNumber(0, WordDataStore.alphabet.length - 1)]);
            if(!this.letterBank[letter.symbol]) this.letterBank[letter.symbol] = letter;
            else --i;
        }
        this.letterBankArray = Object.keys(this.letterBank).map(key => this.letterBank[key]).sort(() => .5 - Math.random());
    }
    
    letterClick(symbol:string) {
        let hiddenPositionIndex:number, indexes:number[] = this.getAllIndexes(this.currentWordArray, symbol);
        indexes.forEach((index) => {
            if((hiddenPositionIndex = this.currentHiddenPositions.indexOf(index)) === -1) return;
            this.currentHiddenPositions.splice(hiddenPositionIndex, 1);
            if(this.currentHiddenPositions.length === 0) this.showNextBtn = true;
            this.letterBank[symbol].selected = true;
        });
    }
}