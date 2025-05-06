import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Arrendador } from 'src/app/model/arrendador';
import { ArrendadorService } from 'src/app/service/arrendador.service';
import { CanchaService } from 'src/app/service/cancha.service';

@Component({
  selector: 'app-perfil-arrendador',
  templateUrl: './perfil-arrendador.component.html',
  styleUrls: ['./perfil-arrendador.component.css']
})
export class PerfilArrendadorComponent {

  constructor(
    private arrendadorServicio:ArrendadorService,
    private canchaServicio:CanchaService,
    private route:ActivatedRoute
  ) { }
  
  arrendador!:Arrendador;
  numCanchas:number = 0;

  ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get("id"));
    this.arrendadorServicio.findById(id).subscribe(a => {
      this.arrendador = a;
      this.canchaServicio.numCanchasByArrendadorId(id).
        subscribe(num => this.numCanchas = num);
    });
  }
}
