import { Component, OnInit } from '@angular/core';
import { ItemService } from './items.component.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  filter: any;
  items: any[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.itemService.retrieveAll().subscribe({
      next: items => {
        this.items = items;
        console.log(items);
      },
      error: err => console.log('Error', err)
    })
  }

  remover(id: any) {
    this.itemService.deleteItem(id).subscribe();
    this.retrieveAll();
  }

}
