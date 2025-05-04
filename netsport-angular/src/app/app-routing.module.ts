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
  {path: "arrendador/perfil/:id", component: PerfilArrendadorComponent},
  {path: "arrendador/agregar-arrendador", component: AgregarArrendadorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
