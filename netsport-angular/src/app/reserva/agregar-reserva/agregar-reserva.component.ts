import { getLocaleDateFormat, Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cancha } from 'src/app/model/cancha';
import { Reserva } from 'src/app/model/reserva';
import { CanchaService } from 'src/app/service/cancha.service';
import { JugadorService } from 'src/app/service/jugador.service';
import { ReservaService } from 'src/app/service/reserva.service';

@Component({
  selector: 'app-agregar-reserva',
  templateUrl: './agregar-reserva.component.html',
  styleUrls: ['./agregar-reserva.component.css']
})
export class AgregarReservaComponent {

  constructor(
    private canchaServicio:CanchaService,
    private reservaServicio:ReservaService,
    private jugadorServicio:JugadorService,
    private route:ActivatedRoute,
    private location:Location
  ) { }

  ngOnInit() {
    this.idJugador = Number(this.route.snapshot.paramMap.get("idJugador"));
    this.jugadorServicio.findById(this.idJugador).subscribe(j => {
      this.reserva.jugador = j;
      this.canchaServicio.findAll().subscribe(canchas => {
        this.canchas = canchas;
      });
    });
  }

  submitReserva() {

  }

  camposValidos(): boolean {
    return true;
  }

  idJugador:number = -1;

  canchas:Cancha[] = [];

  reserva:Reserva = {
    id: -1,
    fecha: "05-01-2025",
    horaIngreso: "14:00:00",
    horaSalida: "16:00:00",
    valorPagar: 30000.0,
    cancha:{
      id: -1,
      direccion: "",
      disponible: true,
      numMaxJugadores: 0,
      tipoCancha: "Fútbol",
      arrendador:{
        id: -1,
        nombre: "",
        password: "",
        usuario: ""
      }
    },
    jugador:{
      id: -1,
      horaDisponible: "",
      nombre: "",
      numPartidosGanados: 0,
      numPartidosPerdidos: 0,
      password: "",
      tipoDeporte: "",
      usuario: ""
    }
  }
}
