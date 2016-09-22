import { Component, ViewChild } from '@angular/core';
import { WordView } from '../word-view.component/word-view.component';
import { WordDataStore } from '../../data.store/word-data.store';
import { Letter } from '../letter.component/letter.component'; 

@Component({
    selector: 'game',
    styles: [`
    div.title {
        font-weight: 600;
    }
    div#word-holder {
        text-align: left;
        border: 1px solid;
        font-size: 20px;
    }
    div.title {
        margin-top: 20px;
        font-size: 20px;
        margin-bottom: 10px;
    }
    div.letter-bank {
        font-size: 20px;
    }
    div#current-word {
        margin-bottom: 35px;
        padding-top: 10px;
        letter-spacing: 20px;
        padding-left: 10px;
    }
    `]
    template: `
    <div *ngIf="noWordsInDatastore">NO WORDS FOUND IN DATASTORE</div>
    <div *ngIf="!noWordsInDatastore">
        <div id="word-holder">
            <word-view [letterArray]="letterArray" [hiddenLetterArray]="hiddenLetters"></word-view>
            <div *ngIf="wordCompleted" id="current-word">{{currentWord}}</div>
        </div>        
        <letter-bank #letterBankRef *ngIf="letterBank.length > 0">
            <div class="title">Letter Bank:</div>
            <letter class="letter" *ngFor="let letter of letterBank" [letter]="letter" [correct]="hiddenLetters.indexOf(letter) !== -1" (clicked)="letterBankRef.letterClicked($event); correctLetterSelected($event)">{{letter}}</letter>
        </letter-bank>
        <div *ngIf="wordCompleted">
            <button (click)="loadNextWord()">Next word</button>
        </div>
    </div>
    `
}) 
export class Game {
    @ViewChild(WordView) wordView:WordView;
    
    letterArray:string[];
    hiddenLettersIndexes:number[];
    hiddenLetters:string[];
    letterBank:string[];
    currentWord:string;
    counter:number = 0;

    noWordsInDatastore:boolean = false;
    wordCompleted:boolean = false;

    constructor() {
        this.clean();
        this.loadNextWord();
    }

    correctLetterSelected(letterComponent:Letter) {
        this.counter++;
        this.wordView.unhideLetter(letterComponent.letter);
        if(this.counter === this.hiddenLetters.length) {
            this.wordCompleted = true;
            /* 
                We have to clean the arrays after the word is guessed (completed).
                If we move this step in loadNextWord we are going to have problems
                because some existing letters in letter bank might not get deleted.
                If you dont understand why this is happening, just come and ask me.  
            */
            this.clean(); 
        }
    }

    private getRandomNumber(min:number, max:number):number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    clean() {
        this.selectedLetters = [];
        this.letterArray = [];
        this.hiddenLetters = [];
        this.hiddenLettersIndexes = [];
        this.letterBank = [];
        this.counter = 0;
    }

    loadNextWord() {
        this.wordCompleted = false;
        //if datastore is empty show error
        if(WordDataStore.words.length === 0) return (this.noWordsInDatastore = true);
        
        this.currentWord = WordDataStore.words[this.getRandomNumber(0, WordDataStore.words.length - 1)];
        
        //we want words longer than 3 chars
        if(this.currentWord.length < 3) {
            let index = WordDataStore.words.indexOf(this.currentWord);
            WordDataStore.words.splice(index, 1);
            return this.loadNextWord();
        }

        this.letterArray = this.currentWord.split('');

        let maxHidden:number = Math.floor(this.currentWord.length - 1);
        let numberOfHidden = this.getRandomNumber(1, maxHidden);

        let difference = 8 - numberOfHidden;

        for(let i = 0; i < numberOfHidden; i++) {
            let position = this.getRandomNumber(0, this.currentWord.length - 1);
            let symbol = this.currentWord[position];
            if(this.letterBank.indexOf(symbol) === -1) { 
                this.hiddenLettersIndexes.push(position); 
                this.letterBank.push(symbol); 
            }
            else difference++;
        }

        for(let i = 0; i < difference; i++) {
            let additionalLetter = WordDataStore.alphabet[this.getRandomNumber(0, WordDataStore.alphabet.length - 1)];
            if(this.letterBank.indexOf(additionalLetter) === -1) this.letterBank.push(additionalLetter);
            else --i;
        }
        
        //randmoize the letter bank
        this.letterBank = this.letterBank.sort(() => .5 - Math.random());
        this.hiddenLetters = this.hiddenLettersIndexes.map((index) => this.letterArray[index]);
    }
}