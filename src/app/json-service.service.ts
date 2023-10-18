import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {

  constructor(private http: HttpClient) {}




  postData(name: string): Observable<Object> {
    let url = "http://localhost:3000/name";
    return this.http.post(url, { name });
  }

  getData(): Observable<any[]> {
    const url = 'http://localhost:3000/name'; 
    return this.http.get<any[]>(url);
  }

  /*likeItem(itemId: number): Observable<any> {
    const url = `http://localhost:3000/like/${itemId}`;
    return this.http.post(url, {});
  }

  unlikeItem(itemId: number): Observable<any> {
    const url = `http://localhost:3000/unlike/${itemId}`;
    return this.http.post(url, {});
  }

  getItems(): Observable<any[]> {
    const url = 'http://localhost:3000/items';
    return this.http.get<any[]>(url);
  }*/
}

