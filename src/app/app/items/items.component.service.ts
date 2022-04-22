import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


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

    retrieveAll(): Observable<any[]> {
        return this.http.get<any[]>(this.itemUrl);
    }

    retrieveById(id: number): Observable<any> {
        return this.http.get<any>(`${this.itemUrl}/${id}`);
    }

    deleteItem(id: any): Observable<any> {
        return this.http.delete(this.itemUrl.concat(id)).pipe(tap(console.log))
    };

    updateItem(id: any, item: any): Observable<any> {
        return this.http.put(this.itemUrl.concat(id), item).pipe(tap(console.log))
    };
}