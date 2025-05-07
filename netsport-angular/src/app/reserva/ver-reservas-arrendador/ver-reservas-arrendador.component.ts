import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reserva } from 'src/app/model/reserva';
import { ReservaService } from 'src/app/service/reserva.service';

@Component({
  selector: 'app-ver-reservas-arrendador',
  templateUrl: './ver-reservas-arrendador.component.html',
  styleUrls: ['./ver-reservas-arrendador.component.css']
})
export class VerReservasArrendadorComponent {

  constructor(
    private reservaServicio:ReservaService,
    private route:ActivatedRoute
  ) { }

  idArrendador:number = -1;

  reservas:Reserva[] = [];

  ngOnInit() {
    this.idArrendador = Number(this.route.snapshot.paramMap.get("id"));
    this.reservaServicio.findByCanchaArrendadorId(this.idArrendador).
      subscribe(reservas => this.reservas = reservas);
  }

}
