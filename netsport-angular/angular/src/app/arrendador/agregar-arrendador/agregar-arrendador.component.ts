import { Component } from '@angular/core';
import { Arrendador } from 'src/app/model/arrendador';
import { ArrendadorService } from 'src/app/service/arrendador.service';

@Component({
  selector: 'app-agregar-arrendador',
  templateUrl: './agregar-arrendador.component.html',
  styleUrls: ['./agregar-arrendador.component.css']
})
export class AgregarArrendadorComponent {

  arrendador:Arrendador = {
    id: -1,
    nombre: "",
    usuario: "",
    contrasena: ""
  };

  constructor(
    private arrendadorServicio:ArrendadorService
  ) { }

  submitArrendador() {
    this.arrendadorServicio.addArrendador(this.arrendador);
    console.log(this.arrendadorServicio.findAll());
  }
}
