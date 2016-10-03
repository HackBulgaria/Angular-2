import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from  'rxjs/Observable';
import {Subscriber} from  'rxjs/Subscriber';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/scan'
import 'rxjs/add/observable/from'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/startWith'


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

    filter = (str:string):Observable<string[]> => {
        if(str === '') return Observable.of([]); 
        let regex = new RegExp(str.toLowerCase());
        let filterFunc = (word:string) => regex.test(word);
        let observable:Observable<string>;
        if(!this.words) observable = this.loadWordsFromServer().mergeMap((val) => Observable.from(val));
        else observable = Observable.from(this.words);
        /* 
            We want to make sure that if filter filters out every one from the words
            there is at least one value (str) that will go trough so an empty array can be sent
        */
        return observable.startWith(str).map((val:string) => val.toLowerCase()).filter(filterFunc).scan((prev, item, index) => {
            if(index === 0) return prev;
            return prev.concat(item);
        },[]);
    }

    loadWordsFromServer = ():Observable<string> => {
        return this._http.get('/data.json').map((res:Response) => { 
            return (this.words = res.json() || []); 
        });
    }

    newWordSubscription(randomGenerator:(min:number, max:number) => number):Observable<string> {
        return new Observable((subscriber:Subscriber<string>) => {
            var loadNextWord = () => subscriber.next(this._currentWord = this.words[randomGenerator(0, this.words.length)]);
            if(!this.words) this.loadWordsFromServer().subscribe(loadNextWord, subscriber.error);
            else loadNextWord();
            this.newWordSubscribers.push({ loadNextWord, subscriber });
        });
    }
}