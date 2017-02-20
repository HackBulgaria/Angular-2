import { Component } from '@angular/core';
import { AppModel } from './store/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private model: AppModel) {
    
  }
}
