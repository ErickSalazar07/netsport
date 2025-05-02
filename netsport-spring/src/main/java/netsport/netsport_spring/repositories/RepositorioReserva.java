package netsport.netsport_spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import netsport.netsport_spring.models.Reserva;


@Repository
public interface RepositorioReserva extends JpaRepository<Reserva,Long> {
  public long count();
}
