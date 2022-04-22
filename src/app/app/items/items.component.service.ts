import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Item } from 'src/app/Model/Item';


@Injectable({
    providedIn: 'root'
})
export class ItemService {

    private itemUrl: string = 'https://localhost:7187/items/';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private http: HttpClient) { }

    save(item: any): Observable<any> {
        return this.http.post(this.itemUrl, item).pipe(tap(console.log))
    };

    retrieveAll(): Observable<Item[]> {
        return this.http.get<Item[]>(this.itemUrl);
    }

    retrieveById(id: number): Observable<Item> {
        return this.http.get<Item>(`${this.itemUrl}/${id}`);
    }

    deleteItem(id: any): Observable<any> {
        return this.http.delete(this.itemUrl.concat(id)).pipe(tap(console.log))
    };

    updateItem(id: any, item: any): Observable<any> {
        return this.http.put(this.itemUrl.concat(id), item).pipe(tap(console.log))
    };
}