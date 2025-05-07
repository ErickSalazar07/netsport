import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilJugadorComponent } from './jugador/perfil-jugador/perfil-jugador.component';
import { PerfilArrendadorComponent } from './arrendador/perfil-arrendador/perfil-arrendador.component';
import { LoginComponent } from './utils/login/login.component';
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
import { FooterComponent } from './home/footer/footer.component';
import { VerCanchasArrendadorComponent } from './cancha/ver-canchas-arrendador/ver-canchas-arrendador.component';
import { DashboardArrendadorComponent } from './arrendador/dashboard-arrendador/dashboard-arrendador.component';
import { VerReservasArrendadorComponent } from './reserva/ver-reservas-arrendador/ver-reservas-arrendador.component';
import { VerReservasJugadorComponent } from './reserva/ver-reservas-jugador/ver-reservas-jugador.component';
import { DashboardJugadorComponent } from './jugador/dashboard-jugador/dashboard-jugador.component';
import { AgregarReservaComponent } from './reserva/agregar-reserva/agregar-reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilJugadorComponent,
    PerfilArrendadorComponent,
    LoginComponent,
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
    FooterComponent,
    VerCanchasArrendadorComponent,
    DashboardArrendadorComponent,
    VerReservasArrendadorComponent,
    VerReservasJugadorComponent,
    DashboardJugadorComponent,
    AgregarReservaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
