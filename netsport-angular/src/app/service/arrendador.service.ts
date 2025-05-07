import { Injectable } from '@angular/core';
import { Arrendador } from '../model/arrendador';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArrendadorService {

  URL_ROOT = "http://192.168.10.18:8090/arrendador";

// Dependencias
  constructor(private http:HttpClient) { }

// Metodos o servicios que provee la clase ArrendadorService.

  findAll(): Observable<Arrendador[]>{
    return this.http.get<Arrendador[]>(this.URL_ROOT + `/arrendadores`);
  }

  findById(id:number): Observable<Arrendador> {
    return this.http.get<Arrendador>(this.URL_ROOT + `/get-arrendador/${id}`);
  }

  findByUsuarioAndContrasena(user:string,pass:string): Observable<Arrendador> {
    return this.http.get<Arrendador>(this.URL_ROOT + `/get-arrendador-usr-pass/${user}/${pass}`);
  }

  addArrendador(arrendador:Arrendador): Observable<any> {
    return this.http.post<any>(this.URL_ROOT + `/add`,arrendador);
  }

  updateArrendador(arrendador:Arrendador): Observable<any> {
    return this.http.put<any>(this.URL_ROOT + `/update`,arrendador);
  }

  deleteById(id:number): Observable<any> {
    return this.http.delete<any>(this.URL_ROOT + `/delete/${id}`);
  }
}
