import { Component, OnInit } from '@angular/core';
import testArr from 'src/assets/test.json';
@Component({
  selector: 'app-table-lists',
  templateUrl: './table-lists.component.html',
  styleUrls: ['./table-lists.component.scss']
})
export class TableListsComponent implements OnInit {
  // arrList = [1, 1, 0, -1, -2];
  arrList = '-6,-3,0,1,3,6,2,5';

  tempArr: any[] = [];
  arr: any;
  smallestPosNum: any;
  arrayLists: number[] | undefined;
  givenNum = 10;
  smallestNum: any;
  constructor() { }
  ngOnInit(): void {
    this.arr = JSON.parse(JSON.stringify(testArr.list));

   this.displayTable();

  }
 
  displayTable() {
    if (this.arr.length < 20) {
      this.arr.length = 20;
    }
    this.tempArr = [];
    this.createMatrix(this.arr, this.arr.length);
  }
  createMatrix(arr: any[], i: number) {
    let size = 20;
    if (arr.length !== 0) {
      if (i % 20 == 0) {
        if (arr.length < 20) {
          arr.length = 20;
          this.tempArr.push(arr.splice(0, 20))
        } else {
          this.tempArr.push(arr.splice(0, 20))
        }
      }
      this.createMatrix(arr, i - 1)
    }
  }

  
}
