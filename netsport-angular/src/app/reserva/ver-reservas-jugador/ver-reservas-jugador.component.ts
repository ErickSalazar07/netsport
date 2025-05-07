import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reserva } from 'src/app/model/reserva';
import { ReservaService } from 'src/app/service/reserva.service';

@Component({
  selector: 'app-ver-reservas-jugador',
  templateUrl: './ver-reservas-jugador.component.html',
  styleUrls: ['./ver-reservas-jugador.component.css']
})
export class VerReservasJugadorComponent {

  constructor(
    private reservaServicio:ReservaService,
    private route:ActivatedRoute
  ) { }

  idJugador:number = -1;
  reservas:Reserva[] = [];

  ngOnInit() {
    this.idJugador = Number(this.route.snapshot.paramMap.get("id"));
    this.reservaServicio.findByJugadorId(this.idJugador).
      subscribe(reservas => this.reservas = reservas);
  }

}
