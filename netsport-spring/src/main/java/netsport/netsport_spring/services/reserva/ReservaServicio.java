package netsport.netsport_spring.services.reserva;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import netsport.netsport_spring.models.Reserva;
import netsport.netsport_spring.repositories.RepositorioReserva;

@Service
public class ReservaServicio implements IReservaServicio {

  @Autowired
  RepositorioReserva repositorioReserva;

  @Override
  public Reserva findById(Long id) {
    return repositorioReserva.findById(id).orElse(null);
  }

  @Override
  public List<Reserva> findAll() {
    return repositorioReserva.findAll();
  }

  @Override
  public List<Reserva> findByCanchaArrendadorId(Long idArrendador) {
    return repositorioReserva.findByCanchaArrendadorId(idArrendador);
  }

  @Override
  public List<Reserva> findByJugadorId(Long idJugador) {
    return repositorioReserva.findByJugadorId(idJugador);
  }

  @Override
  public void addReserva(Reserva reserva) {
    repositorioReserva.save(reserva);
  }

  @Override
  public void updateReserva(Reserva reserva) {
    repositorioReserva.save(reserva);
  }

  @Override
  public void deleteById(Long id) {
    repositorioReserva.deleteById(id);
  }

  @Override
  public Long numReservas() {
    return repositorioReserva.count();
  }

  @Override
  public Long numReservasByJugadorId(Long idJugador) {
    return repositorioReserva.countByJugadorId(idJugador);
  }
  
}
