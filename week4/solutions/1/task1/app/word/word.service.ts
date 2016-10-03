import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from  'rxjs/Observable';
import {Subscriber} from  'rxjs/Subscriber';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class WordService {
    private words:string[];
    private _currentWord:string;
    private newWordSubscribers:{ loadNextWord:Function, subscriber:Subscriber<string> }[] = [];
    
    get currentWord():string {
        return this._currentWord;
    }

    constructor(private _http:Http) {}

    loadNewWord = () => {
        this.newWordSubscribers.map((item) => { 
            item.loadNextWord()
            console.log('Load next');
        })
    }

    newWordSubscription(randomGenerator:(min:number, max:number) => number):Observable<string> {
        return new Observable((subscriber:Subscriber<string>) => {
            var loadNextWord = () => subscriber.next(this._currentWord = this.words[randomGenerator(0, this.words.length)]);
            if(!this.words) { 
                this._http.get('/data.json').map((res:Response) => { 
                    this.words = res.json() || [];
                    loadNextWord();
                }).catch((err) => { subscriber.error(err); return Observable.throw(err); }).subscribe();
            } else loadNextWord();

            this.newWordSubscribers.push({ loadNextWord, subscriber });
        });
    }
}