package netsport.netsport_spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import netsport.netsport_spring.models.Cancha;
import netsport.netsport_spring.services.cancha.ICanchaServicio;

@RestController
@RequestMapping("/cancha")
@CrossOrigin(origins = "http://localhost:4200")
public class ControladorCancha {
  
  @Autowired
  ICanchaServicio canchaServicio;
  
// POST
  @PostMapping("/add")
  public void agregarCancha(@RequestBody Cancha cancha) {
    cancha.setId(null);
    canchaServicio.addCancha(cancha);
  }

// GET

  @GetMapping("/canchas")
  public List<Cancha> obtenerCanchas() {
    return canchaServicio.findAll();
  }

  @GetMapping("/get-cancha/{id}")
  public Cancha obtenerCancha(@PathVariable("id") Long id) {
    return canchaServicio.findById(id);
  }
  
  @GetMapping("/canchas-arrendador/{idArrendador}")
  public List<Cancha> obtenerCanchasByArrendadorId(@PathVariable("idArrendador") Long idArrendador) {
    return canchaServicio.findByArrendadorId(idArrendador);
  }

  @GetMapping("/get-num-canchas-arrendador/{idArrendador}")
  public Long obtenerNumCanchasPorArrendadorId(@PathVariable("idArrendador") Long idArrendador) {
    return canchaServicio.numCanchasByArrendadorId(idArrendador);
  }

// PUT

  @PutMapping("/update")
  public void actualizarCancha(@RequestBody Cancha cancha) {
    Cancha canchaActualizar = canchaServicio.findById(cancha.getId());

    canchaActualizar.setDireccion(cancha.getDireccion());
    canchaActualizar.setDisponible(cancha.getDisponible());
    canchaActualizar.setNumMaxJugadores(cancha.getNumMaxJugadores());
    canchaActualizar.setTipoCancha(cancha.getTipoCancha());

    canchaServicio.updateCancha(canchaActualizar);
  }

// DELETE

  @DeleteMapping("/delete/{id}")
  public void eliminarCancha(@PathVariable("id") Long id) {
    canchaServicio.deleteById(id);
  }

}
