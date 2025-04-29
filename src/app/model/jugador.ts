// Archivo que define la estructura de un jugador (simplificado).

export interface Jugador {
  id:number;
  nombre:string;
  usuario:string;
  contrasena:string;
  numPartidosGanados:number;
  numPartidosPerdidos:number;
}