import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilJugadorComponent } from './jugador/perfil-jugador/perfil-jugador.component';
import { PerfilArrendadorComponent } from './arrendador/perfil-arrendador/perfil-arrendador.component';
import { LoginComponent } from './utils/login/login.component';
import { SeleccionarUsuarioComponent } from './home/seleccionar-usuario/seleccionar-usuario.component';
import { VerJugadoresComponent } from './jugador/ver-jugadores/ver-jugadores.component';
import { AgregarArrendadorComponent } from './arrendador/agregar-arrendador/agregar-arrendador.component';

const routes: Routes =
[
  {path: '', component: SeleccionarUsuarioComponent},
  {path: "jugador/perfil/:id", component: PerfilJugadorComponent},
  {path: "jugador/ver-jugadores", component: VerJugadoresComponent},
  {path: "arrendador/perfil/:id", component: PerfilArrendadorComponent},
  {path: "arrendador/agregar-arrendador", component: AgregarArrendadorComponent},
  {path: "login/:tipoUsuario", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
