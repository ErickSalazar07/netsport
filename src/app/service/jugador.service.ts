import { Injectable } from '@angular/core';
import { Jugador } from '../model/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  constructor() { }

// Metodos de la clase o servicios que provee.

  findById(id:number) {
    return this.jugadores.find(j => j.id === id);
  }

  findByUsuarioAndContrasena(user:string,pass:string) {
    return this.jugadores.
    find(j => j.usuario === user && j.contrasena === pass);
  }

// db quemada en el archivo

  jugadores:Jugador[] = [
    {
      id: 1,
      nombre: "Erick",
      usuario: "erick",
      contrasena: "123",
      numPartidosGanados: 0,
      numPartidosPerdidos: 5
    }
  ];
}
