import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

const URL_API = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {
  
  
  constructor(private http: HttpClient) { }
  getTemperatura(params: any): Observable<any> {
    return this.http.get<any>(URL_API+'/temperatura', { params });
  }
  getTemperaturaAll(): Observable<any> {
    return this.http.get<any>(URL_API+"/temperatura-all");
  }
}

