import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Arrendador } from 'src/app/model/arrendador';
import { ArrendadorService } from 'src/app/service/arrendador.service';

@Component({
  selector: 'app-agregar-arrendador',
  templateUrl: './agregar-arrendador.component.html',
  styleUrls: ['./agregar-arrendador.component.css']
})
export class AgregarArrendadorComponent {

  msgError:string = "";
  msgExito:string = "";

  arrendador:Arrendador = {
    id: -1,
    nombre: "",
    usuario: "",
    password: ""
  };

  constructor(
    private arrendadorServicio:ArrendadorService,
    private location:Location
  ) { }

  submitArrendador() {
    if(this.arrendador.nombre == "" || this.arrendador.usuario == "" || this.arrendador.password == "") {
      this.msgError = "Error: Debe llenar todos los campos.";
      return;
    }

    this.arrendadorServicio.addArrendador(this.arrendador).subscribe({
      complete: () => this.location.back(),
      error: () => this.msgError = "Ocurrio un error al agregar el arrendador."
    });
  }
}
