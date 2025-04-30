// Archivo que define la estructura de un jugador (simplificado).

export interface Jugador {
  id:number;
  nombre:string;
  usuario:string;
  contrasena:string;
  horaDisponible:number; // 1 <= horaDisponible <= 23;
  numPartidosGanados:number;
  numPartidosPerdidos:number;
}