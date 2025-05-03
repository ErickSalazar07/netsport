import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // Ejemplo de datos dinámicos (opcional)
  servicios = [
    { 
      titulo: "ALQUILA TU CANCHA", 
      descripcion: "Arrendadores: Publica tus canchas y llega a más jugadores.",
      icono: "assets/alquilar-icon.png"
    },
    // ...otros servicios
  ];
}