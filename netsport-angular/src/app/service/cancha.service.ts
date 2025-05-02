import { Injectable } from '@angular/core';
import { Cancha } from '../model/cancha';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanchaService {

  URL_ROOT = "http://localhost:8090/cancha";

// Dependencias
  constructor(private http:HttpClient) { }

// Metodos o servicios que provee la clase ArrendadorService.

  findAll(): Observable<Cancha[]> {
    return this.http.get<Cancha[]>(this.URL_ROOT + `/canchas`);
  }

  findById(id:number): Observable<Cancha> {
    return this.http.get<Cancha>(this.URL_ROOT + `/get-cancha/${id}`);
  }

  addCancha(cancha:Cancha): Observable<any> {
    return this.http.post<any>(this.URL_ROOT + `/add`,cancha);
  }

  updateCancha(cancha:Cancha): Observable<any> {
    return this.http.put<any>(this.URL_ROOT + `/update`,cancha);
  }

  deleteById(id:number): Observable<any> {
    return this.http.delete<any>(this.URL_ROOT + `/delete/${id}`);
  }

}
