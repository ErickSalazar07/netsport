import { Arrendador } from "./arrendador";
import { Reserva } from "./reserva";

export interface Cancha {
  id:number;
  tipoCancha:string;
  numMaxJugadores:number;
  direccion:string;
  disponible:boolean;
  arrendador:Arrendador;
  reservas?:Reserva[];
}