import { Component, NgModule, OnInit } from '@angular/core';
import { Item } from 'src/app/Model/Item';
import { ItemService } from './items.component.service';

@Component({
    selector: 'create-app-items',
    templateUrl: './items.create.component.html',
    styleUrls: ['./items.create.component.css']
})
export class ItemsCreateComponent implements OnInit {

    item!: Item;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
    }

    save(): void {
        this.itemService.save(this.item).subscribe({
            next: course => console.log('Saved with success', course),
            error: err => console.log('Error', err)
        });
    }

}