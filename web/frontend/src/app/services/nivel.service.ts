import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

const URL_API = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class NivelService {


  constructor(private http: HttpClient) { }
  getNivel(params: any): Observable<any> {
    return this.http.get<any>(URL_API+"/nivel", { params });
  }
  getNivelAll(): Observable<any> {
    return this.http.get<any>(URL_API+"/nivel-all");
  }
}
