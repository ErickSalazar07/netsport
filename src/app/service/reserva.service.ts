import { Injectable } from '@angular/core';
import { CanchaService } from './cancha.service';
import { Reserva } from '../model/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

// Dependencias
  constructor(
    private canchaServicio:CanchaService
  ) { }

// Metodos o servicios de la clase

  findAll() {
    return this.reservas;
  }

  findById(id:number) {
    return this.reservas.find(r => r.id === id);
  }

  updateReserva(reserva:Reserva) {
    let index = this.reservas.findIndex(r => r.id === reserva.id);
    if(index !== -1)
      this.reservas[index] = reserva;
  }

  deleteById(id:number) {
    this.reservas = this.reservas.filter(r => r.id !== id);
  }

// DB quemada

  reservas:Reserva[] =
  [
    {
      id: 1,
      fecha: "30-04-2025",
      cancha: this.canchaServicio.findById(1)!,
      pago: 100000
    }
  ];
}
