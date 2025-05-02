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
  public void addReserva(Reserva reserva) {
    repositorioReserva.save(reserva);
  }

  @Override
  public void udpateReserva(Reserva reserva) {
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
  
}
