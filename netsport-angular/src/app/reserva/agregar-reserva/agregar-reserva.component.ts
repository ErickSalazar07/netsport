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
        this.canchas = canchas.filter(c => c.disponible === true);
      });
    });
  }

  submitReserva() {
    this.msgError = "";
  
    if (!this.camposValidos()) {
      this.msgError = "Error: Todos los campos son obligatorios.";
      return;
    }
  
    const hoy = new Date();
    const fechaSeleccionada = new Date(this.reserva.fecha);
    const horaIngreso = this.convertirHora(this.reserva.horaIngreso);
    const horaSalida = this.convertirHora(this.reserva.horaSalida);
  
    if (fechaSeleccionada < new Date(hoy.toDateString())) {
      this.msgError = "Error: No puedes registrar reservas en fechas pasadas.";
      return;
    }
  
    if (horaIngreso >= horaSalida) {
      this.msgError = "Error: La hora de ingreso debe ser menor que la hora de salida.";
      return;
    }
  
    const diferenciaMinutos = (horaSalida.getTime() - horaIngreso.getTime()) / (1000 * 60);
    if (diferenciaMinutos < 30) {
      this.msgError = "Error: La reserva debe durar al menos 30 minutos.";
      return;
    }
  
    console.log(this.reserva.cancha);
  
    this.canchaServicio.findById(this.reserva.cancha.id).subscribe(c => {
      this.reserva.cancha = c;
      this.reservaServicio.addReserva(this.reserva).subscribe({
        complete: () => this.location.back()
      });
    });
  }
  
  camposValidos(): boolean {
    return !!(this.reserva.fecha && this.reserva.horaIngreso && this.reserva.horaSalida && this.reserva.cancha.id !== -1);
  }
  
  // Método de utilidad para convertir 'HH:mm' a objeto Date
  convertirHora(hora: string): Date {
    const partes = hora.split(":");
    const fecha = new Date();
    fecha.setHours(parseInt(partes[0]), parseInt(partes[1]), 0, 0);
    return fecha;
  }
  
  idJugador:number = -1;
  msgError:string = "";
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
