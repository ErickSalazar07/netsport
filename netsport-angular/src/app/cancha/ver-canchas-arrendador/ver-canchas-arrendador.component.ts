import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cancha } from 'src/app/model/cancha';
import { CanchaService } from 'src/app/service/cancha.service';

@Component({
  selector: 'app-ver-canchas-arrendador',
  templateUrl: './ver-canchas-arrendador.component.html',
  styleUrls: ['./ver-canchas-arrendador.component.css']
})
export class VerCanchasArrendadorComponent {
  constructor(
    private canchaServicio:CanchaService,
    private route:ActivatedRoute
  ) { }

  idArrendador:number = -1;
  canchas:Cancha[] = [];

  ngOnInit() {
    this.idArrendador = Number(this.route.snapshot.paramMap.get("id"));
    this.canchaServicio.findByArrendadorId(this.idArrendador).subscribe(canchas => this.canchas = canchas);
  }

}
