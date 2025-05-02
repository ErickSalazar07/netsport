package netsport.netsport_spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import netsport.netsport_spring.models.Arrendador;
import netsport.netsport_spring.services.arrendador.IArrendadorServicio;

@RestController
@RequestMapping("/arrendador")
@CrossOrigin(origins = "http://localhost:4200")
public class ControladorArrendador {

  @Autowired
  IArrendadorServicio arrendadorServicio;

// POST

  @PostMapping("/add")
  public void agregarArrendador(@RequestBody Arrendador arrendador) {
    arrendador.setId(null);
    arrendadorServicio.addArrendador(arrendador);
  }

// GET

  @GetMapping("/arrendadores")
  public List<Arrendador> obtenerArrendadores() {
    return arrendadorServicio.findAll();
  }

  @GetMapping("/get-arrendador/{id}")
  public Arrendador obtenerArrendador(@PathVariable(value = "id") Long id) {
    return arrendadorServicio.findById(id);
  }

// PUT

// DELETE

}
