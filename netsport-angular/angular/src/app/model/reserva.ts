import { Cancha } from "./cancha";

export interface Reserva {
  id:number;
  fecha:string;
  cancha:Cancha;
  pago:number;
}