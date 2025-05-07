package netsport.netsport_spring.services.reserva;

import java.util.List;

import netsport.netsport_spring.models.Reserva;

public interface IReservaServicio {
  public Reserva findById(Long id);
  public List<Reserva> findAll();
  public List<Reserva> findByCanchaArrendadorId(Long idArrendador);
  public void addReserva(Reserva reserva);
  public void updateReserva(Reserva reserva);
  public void deleteById(Long id);
  public Long numReservasByJugadorId(Long idJugador);
  public Long numReservas();
}
