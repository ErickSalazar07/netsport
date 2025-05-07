package netsport.netsport_spring.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import netsport.netsport_spring.models.Reserva;


@Repository
public interface RepositorioReserva extends JpaRepository<Reserva,Long> {
  public List<Reserva> findByCanchaArrendadorId(Long idArrendador);
  public long countByJugadorId(Long jugadorId);
  public long count();
}
