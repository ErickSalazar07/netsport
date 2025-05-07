import { Injectable } from '@angular/core';
import { Jugador } from '../model/jugador';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  URL_ROOT = "http://192.168.10.18:8090/jugador";

// Dependencias
  constructor(private http:HttpClient) { }

// Metodos de la clase o servicios que provee.

  findAll(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(this.URL_ROOT + `/jugadores`);
  }

  findById(id:number): Observable<Jugador> {
    return this.http.get<Jugador>(this.URL_ROOT + `/get-jugador/${id}`);
  }

  findByUsuarioAndContrasena(user:string,pass:string): Observable<Jugador> {
    return this.http.get<Jugador>(this.URL_ROOT + `/get-jugador-usr-pass/${user}/${pass}`);
  }

  addJugador(jugador:Jugador): Observable<any> {
    return this.http.post<any>(this.URL_ROOT + `/add`,jugador);
  }

  updateJugador(jugador:Jugador): Observable<any> {
    return this.http.put<any>(this.URL_ROOT + `/update`,jugador);
  }

  deleteById(id:number): Observable<any> {
    return this.http.delete<any>(this.URL_ROOT + `/delete/${id}`);
  }
}
