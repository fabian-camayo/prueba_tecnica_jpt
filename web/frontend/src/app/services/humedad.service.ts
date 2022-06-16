import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

const URL_API = "http://localhost:3000";
@Injectable({
  providedIn: 'root'
})

export class HumedadService {

  constructor(private http: HttpClient) { }
  getHumedad(params: any): Observable<any> {
    return this.http.get<any>(URL_API+"/humedad", { params });
  }
  getHumedadAll(): Observable<any> {
    return this.http.get<any>(URL_API+"/humedad-all");
  }
}
