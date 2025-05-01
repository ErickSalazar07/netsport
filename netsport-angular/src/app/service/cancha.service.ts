import { Injectable } from '@angular/core';
import { ArrendadorService } from './arrendador.service';
import { JugadorService } from './jugador.service';
import { Cancha } from '../model/cancha';

@Injectable({
  providedIn: 'root'
})
export class CanchaService {

// Dependencias
  constructor(
    private arrendadorServicio:ArrendadorService,
    private jugadorServicio:JugadorService
  ) { }

// Metodos o servicios que provee la clase ArrendadorService.

  findAll() {
    return this.canchas;
  }

  findById(id:number) {
    return this.canchas.find(c => c.id === id);
  }

  updateCancha(cancha:Cancha) {
    let index = this.canchas.findIndex(c => c.id === cancha.id);
    if(index !== -1)
      this.canchas[index] = cancha;
  }

  deleteById(id:number) {
    this.canchas = this.canchas.filter(c => c.id !== id);
  }

// Base de datos quemada en el archivo.

  ultimoId:number = 3;

  canchas:Cancha[] = [
    {
      id: 1,
      numMaxJugadores: 10,
      tipoCancha: "Futbol 5",
      arrendador: this.arrendadorServicio.findById(1)!,
      jugadores:
      [
        this.jugadorServicio.findById(1)!,
        this.jugadorServicio.findById(2)!
      ]
    },
    {
      id: 2,
      numMaxJugadores: 1,
      tipoCancha: "Padel Solitario",
      arrendador: this.arrendadorServicio.findById(2)!,
      jugadores:
      [
        this.jugadorServicio.findById(3)!
      ]
    },
    {
      id: 3,
      numMaxJugadores: 2,
      tipoCancha: "Pádel",
      arrendador: this.arrendadorServicio.findById(3)!,
      jugadores: []
    }
  ];
}
