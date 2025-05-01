import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilJugadorComponent } from './jugador/perfil-jugador/perfil-jugador.component';
import { PerfilArrendadorComponent } from './arrendador/perfil-arrendador/perfil-arrendador.component';
import { LoginComponent } from './utils/login/login.component';
import { SeleccionarUsuarioComponent } from './home/seleccionar-usuario/seleccionar-usuario.component';
import { AsignarCanchaComponent } from './cancha/asignar-cancha/asignar-cancha.component';
import { AgregarCanchaComponent } from './cancha/agregar-cancha/agregar-cancha.component';
import { VerCanchasComponent } from './cancha/ver-canchas/ver-canchas.component';
import { VerJugadoresComponent } from './jugador/ver-jugadores/ver-jugadores.component';
import { AgregarJugadorComponent } from './jugador/agregar-jugador/agregar-jugador.component';
import { AgregarArrendadorComponent } from './arrendador/agregar-arrendador/agregar-arrendador.component';
import { VerArrendadoresComponent } from './arrendador/ver-arrendadores/ver-arrendadores.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { HomeArrendadorComponent } from './home/home-arrendador/home-arrendador.component';
import { HomeJugadorComponent } from './home/home-jugador/home-jugador.component';
import { VerReservaComponent } from './reserva/ver-reserva/ver-reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilJugadorComponent,
    PerfilArrendadorComponent,
    LoginComponent,
    SeleccionarUsuarioComponent,
    AsignarCanchaComponent,
    AgregarCanchaComponent,
    VerCanchasComponent,
    VerJugadoresComponent,
    AgregarJugadorComponent,
    AgregarArrendadorComponent,
    VerArrendadoresComponent,
    InicioComponent,
    HomeArrendadorComponent,
    HomeJugadorComponent,
    VerReservaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
