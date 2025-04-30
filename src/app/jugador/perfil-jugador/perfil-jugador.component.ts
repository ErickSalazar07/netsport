import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jugador } from 'src/app/model/jugador';
import { JugadorService } from 'src/app/service/jugador.service';

@Component({
  selector: 'app-perfil-jugador',
  templateUrl: './perfil-jugador.component.html',
  styleUrls: ['./perfil-jugador.component.css']
})
export class PerfilJugadorComponent {

  jugador!:Jugador;

  constructor(
    private jugadorServicio:JugadorService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.jugador = this.jugadorServicio.findById(Number(id))!;
  }
}
