import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Model/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  filter?: any;
  items?: Item[];

  constructor() { }

  ngOnInit(): void {
  }

}
