import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-jugador',
  templateUrl: './dashboard-jugador.component.html',
  styleUrls: ['./dashboard-jugador.component.css']
})
export class DashboardJugadorComponent {

  constructor(
    private route:ActivatedRoute
  ) { }

  idJugador:number = -1;

  ngOnInit() {
    this.idJugador = Number(this.route.snapshot.paramMap.get("id"));
  }

}
