import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Game } from './components/game.component/game.component';
import { LetterBank } from './components/letter-bank.component/letter-bank.component';
import { Letter } from './components/letter.component/letter.component';
import { WordView } from './components/word-view.component/word-view.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ Game, Letter, LetterBank, WordView ],
    bootstrap: [ Game ]
}) export class AppModule {

}