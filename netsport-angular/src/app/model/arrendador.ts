// Archivo que define la estructura que tiene un arrendador (simplificado)

import { Cancha } from "./cancha";

export interface Arrendador {
  id:number;
  nombre:string;
  usuario:string;
  password:string;
  canchas?:Cancha[];
}
