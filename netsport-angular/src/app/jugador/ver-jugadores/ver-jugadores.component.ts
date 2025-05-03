import { Component } from '@angular/core';
import { Jugador } from 'src/app/model/jugador';
import { JugadorService } from 'src/app/service/jugador.service';

@Component({
  selector: 'app-ver-jugadores',
  templateUrl: './ver-jugadores.component.html',
  styleUrls: ['./ver-jugadores.component.css']
})
export class VerJugadoresComponent {

  jugadores!:Jugador[];

  constructor(
    private jugadorServicio:JugadorService
  ) { }

  ngOnInit() {
    this.jugadorServicio.findAll().subscribe(j => {
      this.jugadores = j;
    });
  }
}
