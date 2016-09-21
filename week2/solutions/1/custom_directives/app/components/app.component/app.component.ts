import { Component } from '@angular/core';

@Component({
    selector: 'appy',
    templateUrl: 'app/components/app.component/app.component.html'
}) export class App {
    items:any[] = [{
        id: 1,
        name: 'Ivan'
    }, {
        id: 2,
        name: 'Pesho'
    }, {
        id: 3,
        name: 'Stefan'
    }];
}