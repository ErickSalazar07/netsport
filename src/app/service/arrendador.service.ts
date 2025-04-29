import { Injectable } from '@angular/core';
import { Arrendador } from '../model/arrendador';

@Injectable({
  providedIn: 'root'
})
export class ArrendadorService {

  constructor() { }

// Metodos o servicios que provee la clase ArrendadorService.

  findById(id:number) {
    return this.arrendadores.find(a => a.id === id);
  }

  findByUsuarioAndContrasena(user:string,pass:string) {
    return this.arrendadores.find(a => a.usuario === user && a.contrasena === pass);
  }

// Base de datos quemada en el archivo.

  arrendadores:Arrendador[] = [
    {
      id: 1,
      nombre: "Pacho",
      usuario: "pacho",
      contrasena: "123",
      numCanchasRegistradas: 3
    },
    {
      id: 2,
      nombre: "Juan",
      usuario: "juan",
      contrasena: "456",
      numCanchasRegistradas: 0
    },
  ];
}
