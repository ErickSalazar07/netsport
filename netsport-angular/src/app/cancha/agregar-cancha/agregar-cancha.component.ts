import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cancha } from 'src/app/model/cancha';
import { ArrendadorService } from 'src/app/service/arrendador.service';
import { CanchaService } from 'src/app/service/cancha.service';

@Component({
  selector: 'app-agregar-cancha',
  templateUrl: './agregar-cancha.component.html',
  styleUrls: ['./agregar-cancha.component.css']
})
export class AgregarCanchaComponent {

  constructor(
    private canchaServicio:CanchaService,
    private arrendadorServicio:ArrendadorService,
    private route:ActivatedRoute,
    private location:Location
  ) { }

  msgError:string = "";

  idArrendador:number = -1;

  cancha:Cancha = {
    id: -1,
    direccion: "",
    disponible: true,
    numMaxJugadores: 0,
    tipoCancha: "Fútbol",
    arrendador: {
      id: -1,
      nombre: "",
      password: "",
      usuario: "",
    }
  };

  ngOnInit() {
    this.idArrendador = Number(this.route.snapshot.paramMap.get("idArrendador"));
    this.arrendadorServicio.findById(this.idArrendador).subscribe(a => {
      this.cancha.arrendador = a;
    });
  }

  submitCancha() {
    if(!this.camposValidos()) {
      this.msgError = "Error: Todos los campos son obligatorios. Maximo jugadores de al menos 5."
      return;
    }
  
    this.canchaServicio.addCancha(this.cancha).subscribe({
      complete: () => this.location.back()
    });
  }

  camposValidos(): boolean {
    console.log(this.cancha);
    return this.cancha.direccion !== "" && this.cancha.numMaxJugadores >= 5
    && this.cancha.arrendador !== null && this.cancha.tipoCancha !== "";
  }

}
