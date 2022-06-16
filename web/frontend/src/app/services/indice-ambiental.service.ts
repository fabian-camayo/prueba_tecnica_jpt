import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { IndiceAmbientalDto } from "../models/indiceAmbientalDto";

const URL_API = "http://localhost:3000";
@Injectable({
  providedIn: 'root'
})

export class IndiceAmbientalService {

  constructor(private http: HttpClient) { }
  getIndiceAmbiental(params: any): Observable<any> {
    return this.http.get<any>(URL_API+"/indice-ambiental", { params });
  }
  postIndiceAmbiental(indiceAmbientalDto: IndiceAmbientalDto) {
    return this.http.post(URL_API+"/indice-ambiental", indiceAmbientalDto);
  }
}