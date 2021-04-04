import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Item {
  name: string;
  description: string;
  images: [];
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private dataURL: string = '/assets/trips.json';
  constructor(private httpClient: HttpClient) {}

  fetchData(): Observable<Item[]> {
    return <Observable<Item[]>>this.httpClient.get(this.dataURL);
  }
}
