import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jugador } from 'src/app/model/jugador';
import { ArrendadorService } from 'src/app/service/arrendador.service';
import { JugadorService } from 'src/app/service/jugador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  tipoUsuario:string | null = null;
  txtUsuario:string = '';
  txtContrasena:string = '';

  constructor(
    private jugadorServicio:JugadorService,
    private arrendadorServicio:ArrendadorService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  msgError:string = "";

  ngOnInit(): void {
    this.tipoUsuario = this.route.snapshot.paramMap.get('tipoUsuario');
    console.log(this.arrendadorServicio.findAll());
  }

  camposValidos(): boolean {
    return this.txtUsuario !== "" && this.txtContrasena !== "";
  }

  login() {

    if(!this.camposValidos()) {
      this.msgError = "Error: Todos los campos son obligatorios.";
      return;
    }


    switch(this.tipoUsuario) {
      case "jugador": 
        this.jugadorServicio.findByUsuarioAndContrasena(this.txtUsuario,this.txtContrasena).subscribe(j => {
          j ? this.router.navigate([`/jugador/dashboard/${j.id}/perfil/${j.id}`]) :
          this.msgError = "Error: El jugador no se encuentra registrado."
        });
      break;
      case "arrendador":
        this.arrendadorServicio.findByUsuarioAndContrasena(this.txtUsuario,this.txtContrasena).subscribe(a => {
          a ? this.router.navigate([`/arrendador/dashboard/${a.id}/perfil/${a.id}`]) :
          this.msgError = "Error: El arrendador no se encuentra registrado."
        });
      break;
      default: alert("Error: no se reconoce el usuario con el que entro al login.");
    }
  }
}
