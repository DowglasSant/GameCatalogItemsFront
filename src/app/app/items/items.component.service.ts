import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from 'src/app/Model/Item';


@Injectable({
    providedIn: 'root'
})
export class ItemService {

    private itemUrl: string = '';

    httpOptions = {
        Headers: new HttpHeaders({ 'content-type': 'application/json' })
    }

    constructor(private httpClient: HttpClient) { }

    save(item: Item): Observable<Item> {
        if (item.id) {
            return this.httpClient.put<Item>(`${this.itemUrl}/${item.id}`, item);
        } else {
            return this.httpClient.post<Item>(`${this.itemUrl}`, item);
        }
    }
}