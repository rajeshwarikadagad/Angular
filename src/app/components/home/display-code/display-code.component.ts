import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-display-code',
  templateUrl: './display-code.component.html',
  styleUrls: ['./display-code.component.scss']
})
export class DisplayCodeComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log('data', this.data);
  }

}
