import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Jugador } from 'src/app/model/jugador';
import { JugadorService } from 'src/app/service/jugador.service';

@Component({
  selector: 'app-agregar-jugador',
  templateUrl: './agregar-jugador.component.html',
  styleUrls: ['./agregar-jugador.component.css']
})
export class AgregarJugadorComponent {

  constructor(
    private jugadorServicio:JugadorService,
    private location:Location
  ) { }

  msgError:string = "";

  jugador:Jugador = {
    id: -1,
    nombre: "",
    usuario: "",
    password: "",
    tipoDeporte: "",
    horaDisponible: "14:30:00",
    numPartidosGanados: 0,
    numPartidosPerdidos: 0
  };

  submitJugador() {
    
    if(!this.camposValidos()) {
      this.msgError = "Error: Debe llenar todos los campos e ingresar valores positivos. Y la hora entre las 7AM y las 10PM";
      return;
    }

    if(this.jugador.horaDisponible.length === 5) this.jugador.horaDisponible += ":00";

    console.log(`JUGADOR: ${this.jugador}`);
    console.log(`jugador.horaDisponible: ${this.jugador.horaDisponible}`);

    this.jugadorServicio.addJugador(this.jugador).subscribe({
      complete: () => this.location.back(),
      error: () => this.msgError = "Ocurrio un error al agregar el jugador."
    });
  }

  camposValidos(): boolean {
    const hora = this.jugador.horaDisponible.split(':');
    const horaEntera = parseInt(hora[0]);
  
    return this.jugador.nombre !== "" && this.jugador.usuario !== ""
      && this.jugador.password !== "" && this.jugador.tipoDeporte !== ""
      && this.jugador.numPartidosGanados >= 0 && this.jugador.numPartidosPerdidos >= 0
      && horaEntera >= 7 && horaEntera <= 22;
  }
}
