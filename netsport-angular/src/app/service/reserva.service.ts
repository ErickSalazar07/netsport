import { Injectable } from '@angular/core';
import { Reserva } from '../model/reserva';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  URL_ROOT = "http://localhost:8090/reserva";

// Dependencias

  constructor(private http:HttpClient) { }

// Metodos o servicios de la clase

  findAll(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.URL_ROOT + `/reservas`);
  }

  findById(id:number): Observable<Reserva> {
    return this.http.get<Reserva>(this.URL_ROOT + `/get-reserva/${id}`);
  }

  addReserva(reserva:Reserva): Observable<any> {
    return this.http.post<any>(this.URL_ROOT + `/add`,reserva);
  }

  updateReserva(reserva:Reserva): Observable<any> {
    return this.http.put<any>(this.URL_ROOT + `/update`,reserva);
  }

  deleteById(id:number): Observable<any> {
    return this.http.delete<any>(this.URL_ROOT + `/delete/${id}`);
  }
}
