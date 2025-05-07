import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilJugadorComponent } from './jugador/perfil-jugador/perfil-jugador.component';
import { PerfilArrendadorComponent } from './arrendador/perfil-arrendador/perfil-arrendador.component';
import { LoginComponent } from './utils/login/login.component';
import { VerJugadoresComponent } from './jugador/ver-jugadores/ver-jugadores.component';
import { AgregarArrendadorComponent } from './arrendador/agregar-arrendador/agregar-arrendador.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { HomeJugadorComponent } from './home/home-jugador/home-jugador.component';
import { HomeArrendadorComponent } from './home/home-arrendador/home-arrendador.component';
import { AgregarJugadorComponent } from './jugador/agregar-jugador/agregar-jugador.component';
import { DashboardArrendadorComponent } from './arrendador/dashboard-arrendador/dashboard-arrendador.component';
import { VerCanchasArrendadorComponent } from './cancha/ver-canchas-arrendador/ver-canchas-arrendador.component';
import { AgregarCanchaComponent } from './cancha/agregar-cancha/agregar-cancha.component';
import { VerReservasArrendadorComponent } from './reserva/ver-reservas-arrendador/ver-reservas-arrendador.component';
import { AgregarReservaComponent } from './reserva/agregar-reserva/agregar-reserva.component';
import { DashboardJugadorComponent } from './jugador/dashboard-jugador/dashboard-jugador.component';
import { VerReservasJugadorComponent } from './reserva/ver-reservas-jugador/ver-reservas-jugador.component';

const routes: Routes =
[
  {path: "inicio", component: InicioComponent},
  {path: "home/inicio-jugador", component: HomeJugadorComponent},
  {path: "home/inicio-arrendador", component: HomeArrendadorComponent},
  {path: "login/:tipoUsuario", component: LoginComponent},
  {path: "jugador/agregar-jugador", component: AgregarJugadorComponent},
  {path: "jugador/ver-jugadores", component: VerJugadoresComponent},
  {path: "jugador/dashboard/:id", component: DashboardJugadorComponent,
    children:
    [
      {path: "perfil/:id", component: PerfilJugadorComponent},
      {path: "reservas/:id", component: VerReservasJugadorComponent},
      {path: "**", redirectTo: "/home/inicio-jugador", pathMatch: "full"}
    ]
  },
  {path: "reserva/agregar-reserva/:idJugador", component: AgregarReservaComponent},
  {path: "arrendador/agregar-arrendador", component: AgregarArrendadorComponent},
  {path: "arrendador/dashboard/:id", component: DashboardArrendadorComponent,
    children:
    [
      {path: "perfil/:id", component: PerfilArrendadorComponent},
      {path: "canchas/:id", component: VerCanchasArrendadorComponent},
      {path: "reservas/:id", component: VerReservasArrendadorComponent},
      {path: "**", redirectTo: "/home/inicio-arrendador", pathMatch: "full"}
    ]
  },
  {path: "cancha/agregar-cancha/:idArrendador", component: AgregarCanchaComponent},
  {path: "**", redirectTo: "/inicio", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
