import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jugador } from 'src/app/model/jugador';
import { JugadorService } from 'src/app/service/jugador.service';
import { ReservaService } from 'src/app/service/reserva.service';

@Component({
  selector: 'app-perfil-jugador',
  templateUrl: './perfil-jugador.component.html',
  styleUrls: ['./perfil-jugador.component.css']
})
export class PerfilJugadorComponent {

  constructor(
    private reservaServicio:ReservaService,
    private jugadorServicio:JugadorService,
    private route:ActivatedRoute
  ) { }
  
  jugador!:Jugador;
  numReservas:number = 0;

  ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.jugadorServicio.findById(id).subscribe(j => {
      this.jugador = j;
      this.reservaServicio.numReservasByJugadorId(id).subscribe(n => {
        this.numReservas = n;
      });
    });
  }
}
