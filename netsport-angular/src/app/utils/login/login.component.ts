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

  ngOnInit(): void {
    this.tipoUsuario = this.route.snapshot.paramMap.get('tipoUsuario');
    console.log(this.arrendadorServicio.findAll());
  }

  login() {
    switch(this.tipoUsuario) {
      case "jugador": 
        this.jugadorServicio.findByUsuarioAndContrasena(this.txtUsuario,this.txtContrasena).subscribe(j => {
          j !== undefined ?
          this.router.navigate([`/jugador/dashboard/${j.id}/perfil/${j.id}`]) :
          alert("El usuario no existe.");
        });
      break;
      case "arrendador":
        this.arrendadorServicio.findByUsuarioAndContrasena(this.txtUsuario,this.txtContrasena).subscribe(a => {
          a !== undefined ?
          this.router.navigate([`/arrendador/dashboard/${a.id}/perfil/${a.id}`]) :
          alert("El arrendador no existe.");
        });
      break;
      default: alert("Error: no se reconoce el usuario con el que entro al login.");
    }
  }
}
