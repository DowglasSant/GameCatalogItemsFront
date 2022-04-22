import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from './items.component.service';

@Component({
    selector: 'update-app-items',
    templateUrl: './items.update.component.html',
    styleUrls: ['./items.update.component.css']
})
export class ItemsUpdateComponent implements OnInit {

    item: any;
    id?: any[];

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.item = {};
    }

    update(id: any, frm: NgForm): void {
        console.log(id);
        this.itemService.updateItem(id, this.item).subscribe(data => {
            this.item = data;
            frm.reset();
        })
    }

}