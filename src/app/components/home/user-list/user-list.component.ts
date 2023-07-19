import { Component, OnInit } from '@angular/core';
interface LIST {
  item: string,
  isDone: boolean
}
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
progrssCount: number = 0;
itemLength: number = 0;
UserList: Array<LIST> = [];
item: string='';

constructor() { }

ngOnInit(): void {

}

onCLickAdd() {
  if(this.item)
  this.UserList.push({item: this.item, isDone: false});
  this.item= '';
  this.progrssCount = this.UserList.filter(item => item.isDone == false).length;
  this.itemLength = Object.keys(this.UserList).length
}

onClickList(list: LIST) {
  list.isDone = !list.isDone;
  this.progrssCount = this.UserList.filter(item => item.isDone == false).length;
  }

}
