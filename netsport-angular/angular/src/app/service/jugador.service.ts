import { Injectable } from '@angular/core';
import { Jugador } from '../model/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

// Dependencias
  constructor() { }

// Metodos de la clase o servicios que provee.

  findAll() {
    return this.jugadores;
  }

  findById(id:number) {
    return this.jugadores.find(j => j.id === id);
  }

  findByUsuarioAndContrasena(user:string,pass:string) {
    return this.jugadores.
    find(j => j.usuario === user && j.contrasena === pass);
  }

  updateJugador(jugador:Jugador) {
    let index = this.jugadores.findIndex(j => j.id === jugador.id);
    if(index !== -1)
      this.jugadores[index] = jugador;
  }

  deleteById(id:number) {
    if(!this.jugadores || this.jugadores.length <= 0) return;
    this.jugadores = this.jugadores.filter(j => j.id !== id);
  }

// db quemada en el archivo

  ultimoId:number = 3;

  jugadores:Jugador[] = [
    {
      id: 1,
      nombre: "Erick Torres",
      usuario: "erick",
      contrasena: "123",
      deporte: "Futbol",
      horaDisponible: 8,
      numPartidosGanados: 0,
      numPartidosPerdidos: 5
    },
    {
      id: 2,
      nombre: "María López",
      usuario: "maria",
      contrasena: "abc",
      deporte: "Futbol",
      horaDisponible: 15,
      numPartidosGanados: 20,
      numPartidosPerdidos: 10,
    },
    {
      id: 3,
      nombre: "Carlos Ruiz",
      usuario: "carlos",
      contrasena: "abc",
      deporte: "Futbol",
      horaDisponible: 5,
      numPartidosGanados: 3,
      numPartidosPerdidos: 7,
    }
  ];
}
