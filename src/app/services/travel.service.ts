import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

public apiUrl:string = "http://localhost:3000/travels";

  constructor(private http:HttpClient) { }
  
 getTravels():Observable<any>
 {
   return this.http.get<any>(this.apiUrl);
 }
}
