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

import netsport.netsport_spring.models.Reserva;
import netsport.netsport_spring.services.reserva.IReservaServicio;

@RestController
@RequestMapping("/reserva")
@CrossOrigin(origins = "http://localhost:4200")
public class ControladorReserva {
  
  @Autowired
  IReservaServicio reservaServicio;
  
// POST

  @PostMapping("/add")
  public void agregarReserva(@RequestBody Reserva reserva) {
    reserva.setId(null);
    reservaServicio.addReserva(reserva);
  }

// GET

  @GetMapping("/reservas")
  public List<Reserva> obtenerReservas() {
    return reservaServicio.findAll();
  }

  @GetMapping("/get-reserva/{id}")
  public Reserva obtenerReserva(@PathVariable("id") Long id) {
    return reservaServicio.findById(id);
  }

// PUT

  @PutMapping("/update")
  public void actualizarReserva(@RequestBody Reserva reserva) {
    Reserva reservaActualizar = reservaServicio.findById(reserva.getId());

    reservaActualizar.setFecha(reserva.getFecha());
    reservaActualizar.setHoraIngreso(reserva.getHoraIngreso());
    reservaActualizar.setHoraSalida(reserva.getHoraSalida());
    reservaActualizar.setValorPagar(reserva.getValorPagar());

    reservaServicio.updateReserva(reservaActualizar);
  }

// DELETE
  
  @DeleteMapping("/delete/{id}")
  public void eliminarReserva(@PathVariable("id") Long id) {
    reservaServicio.deleteById(id);
  }
}
