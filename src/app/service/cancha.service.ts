import { Injectable } from '@angular/core';
import { ArrendadorService } from './arrendador.service';
import { JugadorService } from './jugador.service';
import { Cancha } from '../model/cancha';

@Injectable({
  providedIn: 'root'
})
export class CanchaService {

  constructor(
    private arrendadorServicio:ArrendadorService,
    private jugadorServicio:JugadorService
  ) { }

// Metodos o servicios que provee la clase ArrendadorService.



// Base de datos quemada en el archivo.

  canchas:Cancha[] = [
    {
      id: 1,
      numMaxJugadores: 10,
      tipoCancha: "Futbol 5",
      arrendador:
      {
        id: 1,
        nombre: "Francisco Garcia",
        usuario: "francisco",
        contrasena: "123",
      },
      jugadores:
      [
        {
          id: 1,
          nombre: "Erick Torres",
          usuario: "erick",
          contrasena: "123",
          horaDisponible: 8,
          numPartidosGanados: 0,
          numPartidosPerdidos: 5
        },
        {
          id: 2,
          nombre: "María López",
          usuario: "maria",
          contrasena: "abc",
          horaDisponible: 15,
          numPartidosGanados: 20,
          numPartidosPerdidos: 10,
        }
      ]
    },
    {
      id: 2,
      numMaxJugadores: 1,
      tipoCancha: "Padel Solitario",
      arrendador:
      {
        id: 2,
        nombre: "Juan Perez",
        usuario: "juan",
        contrasena: "456",
      },
      jugadores:
      [
        {
          id: 3,
          nombre: "Carlos Ruiz",
          usuario: "carlos",
          contrasena: "deportes",
          horaDisponible: 5,
          numPartidosGanados: 3,
          numPartidosPerdidos: 7,
        }
      ]
    },
    {
      id: 3,
      numMaxJugadores: 2,
      tipoCancha: "Pádel",
      arrendador:
      {
        id: 3,
        nombre: "Ana Martinez",
        usuario: "ana",
        contrasena: "789",
      },
      jugadores: []
    }
  ];

}
