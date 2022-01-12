import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  public apiUrl: string = "http://localhost:3000/travels";

  //express JS server link
  public apiUrl1: string = "http://localhost:2900/getData" 

  constructor(private http: HttpClient) { }

  getTravels(): Observable<any> {
    return this.http.get<any>(this.apiUrl1);
  }

  postTravels(key: any, data: any): Observable<any> {
    console.log("service", `${this.apiUrl}/${key}`, key, data);
    return this.http.put<any>(`${this.apiUrl}/${key}/`, { data });
  }
}
