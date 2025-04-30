import { Injectable } from '@angular/core';
import { Jugador } from '../model/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  constructor() { }

// Metodos de la clase o servicios que provee.

  findAll() {
    return this.jugadores;
  }

  findById(id:number) {
    let jugador = this.jugadores.find(j => j.id === id);
    return jugador ? jugador : null;
  }

  findByUsuarioAndContrasena(user:string,pass:string) {
    return this.jugadores.
    find(j => j.usuario === user && j.contrasena === pass);
  }

  updateJugador(jugadorUpdate:Jugador) {
    for(let jugador of this.jugadores) 
      if(jugador.id === jugadorUpdate.id) {
        jugador = jugadorUpdate
        return
      }
  }

  deleteById(id:number) {
    if(!this.jugadores || this.jugadores.length <= 0) return;
    this.jugadores = this.jugadores.filter(j => j.id !== id);
  }

// db quemada en el archivo

  jugadores:Jugador[] = [
    {
      id: 1,
      nombre: "Erick Torres",
      usuario: "erick",
      contrasena: "123",
      horaDisponible: 8,
      numPartidosGanados: 0,
      numPartidosPerdidos: 5
    },
    {
      id: 2,
      nombre: "María López",
      usuario: "maria",
      contrasena: "abc",
      horaDisponible: 15,
      numPartidosGanados: 20,
      numPartidosPerdidos: 10,
    },
    {
      id: 3,
      nombre: "Carlos Ruiz",
      usuario: "carlos",
      contrasena: "deportes",
      horaDisponible: 5,
      numPartidosGanados: 3,
      numPartidosPerdidos: 7,
    }
  ];
}
