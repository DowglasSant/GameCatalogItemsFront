import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from './items.component.service';

@Component({
    selector: 'create-app-items',
    templateUrl: './items.create.component.html',
    styleUrls: ['./items.create.component.css']
})
export class ItemsCreateComponent implements OnInit {

    item: any;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.item = {};
    }

    save(frm: NgForm): void {
        this.itemService.save(this.item).subscribe(data => {
            this.item = data;
            frm.reset();
        })
    }

}