import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilJugadorComponent } from './jugador/perfil-jugador/perfil-jugador.component';
import { PerfilArrendadorComponent } from './arrendador/perfil-arrendador/perfil-arrendador.component';
import { LoginComponent } from './utils/login/login.component';
import { SeleccionarUsuarioComponent } from './home/seleccionar-usuario/seleccionar-usuario.component';
import { VerJugadoresComponent } from './jugador/ver-jugadores/ver-jugadores.component';
import { AgregarArrendadorComponent } from './arrendador/agregar-arrendador/agregar-arrendador.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { HomeJugadorComponent } from './home/home-jugador/home-jugador.component';
import { HomeArrendadorComponent } from './home/home-arrendador/home-arrendador.component';
import { AgregarJugadorComponent } from './jugador/agregar-jugador/agregar-jugador.component';
import { DashboardArrendadorComponent } from './arrendador/dashboard-arrendador/dashboard-arrendador.component';
import { VerCanchasArrendadorComponent } from './cancha/ver-canchas-arrendador/ver-canchas-arrendador.component';
import { AgregarCanchaComponent } from './cancha/agregar-cancha/agregar-cancha.component';

const routes: Routes =
[
  {path: "", component: InicioComponent},
  {path: "home/inicio-jugador", component: HomeJugadorComponent},
  {path: "home/inicio-arrendador", component: HomeArrendadorComponent},
  {path: "login/:tipoUsuario", component: LoginComponent},
  {path: "seleccionar-usuario", component: SeleccionarUsuarioComponent},
  {path: "jugador/perfil/:id", component: PerfilJugadorComponent},
  {path: "jugador/ver-jugadores", component: VerJugadoresComponent},
  {path: "jugador/agregar-jugador", component: AgregarJugadorComponent},
  {path: "arrendador/agregar-arrendador", component: AgregarArrendadorComponent},
  {path: "arrendador/dashboard/:id", component: DashboardArrendadorComponent,
    children:
    [
      {path: "perfil/:id", component: PerfilArrendadorComponent},
      {path: "canchas/:id", component: VerCanchasArrendadorComponent},
      {path: "", redirectTo: "home/inicio-arrendador", pathMatch: "full"}
    ]
  },
  {path: "cancha/agregar-cancha/:idArrendador", component: AgregarCanchaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
