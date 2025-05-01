// Archivo que define la estructura que tiene un arrendador (simplificado)

import { Cancha } from "./cancha";

export interface Arrendador {
  id:number;
  nombre:string;
  usuario:string;
  contrasena:string;
  canchas?:Cancha[];
}
