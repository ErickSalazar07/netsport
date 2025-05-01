import { Arrendador } from "./arrendador";
import { Jugador } from "./jugador";

export interface Cancha {
  id:number;
  numMaxJugadores:number;
  tipoCancha:string;
  arrendador:Arrendador;
  jugadores:Jugador[]; // Debe ser una lista de a lo mucho numMaxJugadores
}