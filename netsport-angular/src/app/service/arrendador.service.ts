import { Injectable } from '@angular/core';
import { Arrendador } from '../model/arrendador';

@Injectable({
  providedIn: 'root'
})
export class ArrendadorService {

// Dependencias
  constructor() { }

// Metodos o servicios que provee la clase ArrendadorService.

  findAll() {
    return this.arrendadores;
  }

  findById(id:number) {
    return this.arrendadores.find(a => a.id === id);
  }

  findByUsuarioAndContrasena(user:string,pass:string) {
    return this.arrendadores.find(a => a.usuario === user && a.contrasena === pass);
  }

  addArrendador(arrendador:Arrendador) {
    arrendador.id = ++this.ultimoId;
    this.arrendadores.push(arrendador);
  }

  updateArrendador(arrendador:Arrendador) {
    let index = this.arrendadores.findIndex(a => a.id == arrendador.id);
    if(index !== -1)
      this.arrendadores[index] = arrendador;
  }

  deleteById(id:number) {
    this.arrendadores = this.arrendadores.filter(a => a.id !== id);
  }

// Base de datos quemada en el archivo.

  ultimoId:number = 3;

  arrendadores:Arrendador[] = [
    {
      id: 1,
      nombre: "Francisco Garcia",
      usuario: "francisco",
      contrasena: "123",
    },
    {
      id: 2,
      nombre: "Juan Perez",
      usuario: "juan",
      contrasena: "456",
    },
    {
      id: 3,
      nombre: "Ana Martinez",
      usuario: "ana",
      contrasena: "789",
    }
  ];
}
