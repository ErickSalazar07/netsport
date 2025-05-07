import { Cancha } from "./cancha";
import { Jugador } from "./jugador";

export interface Reserva {
  id:number;
  fecha:string;
  horaIngreso:string;
  horaSalida:string;
  valorPagar:number;
  cancha:Cancha;
  jugador:Jugador;
}