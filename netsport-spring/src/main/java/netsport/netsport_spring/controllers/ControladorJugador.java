package netsport.netsport_spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import netsport.netsport_spring.models.Jugador;
import netsport.netsport_spring.services.jugador.IJugadorServicio;

@RestController
@RequestMapping("/jugador")
@CrossOrigin(origins = "http://localhost:4200")
public class ControladorJugador {

  @Autowired
  IJugadorServicio jugadorServicio;

// POST

  @PostMapping("/add")
  public void agregarJugador(@RequestBody Jugador jugador) {
    jugador.setId(null);
    jugadorServicio.addJugador(jugador);
  }

// GET

  @GetMapping("/jugadores")
  public List<Jugador> obtenerJugadores() {
    return jugadorServicio.findAll();
  }

  @GetMapping("/get-jugador/{id}")
  public Jugador obtenerJugador(@PathVariable("id") Long id) {
    return jugadorServicio.findById(id);
  }

  @GetMapping("/get-jugador-usr-pass/{usr}/{pass}")
  public Jugador obtenerJugadorPorUsuarioYContrasena(@PathVariable("usr") String usuario,
    @PathVariable("pass") String contrasena) {

    return jugadorServicio.findByUsuarioAndContrasena(usuario, contrasena);
  }

// PUT

  @PutMapping("/update")
  public void actualizarJugador(@RequestBody Jugador jugador) {
    Jugador jugadorActualizar = jugadorServicio.findById(jugador.getId());

    jugadorActualizar.setNombre(jugador.getNombre());
    jugadorActualizar.setUsuario(jugador.getUsuario());
    jugadorActualizar.setContrasena(jugador.getContrasena());
    jugadorActualizar.setHoraDisponible(jugador.getHoraDisponible());
    jugadorActualizar.setNumPartidosGanados(jugador.getNumPartidosGanados());
    jugadorActualizar.setNumPartidosPerdidos(jugador.getNumPartidosPerdidos());
    jugadorActualizar.setTipoDeporte(jugador.getTipoDeporte());

    jugadorServicio.updateJugador(jugadorActualizar);
  }

// DELETE

  @DeleteMapping("/delete/{id}")
  public void eliminarJugador(@PathVariable("id") Long id) {
    jugadorServicio.deleteById(id);
  }

}
