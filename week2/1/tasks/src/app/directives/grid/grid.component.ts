import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() pageSize: number;
  @Input() data: any[];
  currentPage: number = 1;

  constructor() { }

  ngOnInit() {
    this.pageSize = parseInt(this.pageSize.toString());
  }

  prev() {
    if(this.currentPage - 1 <= 0) return;
    --this.currentPage;
  }

  next() {
    if(this.currentPage + 1 > (this.data.length / this.pageSize)) return;
    ++this.currentPage;
  }

}
