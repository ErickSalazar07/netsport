package netsport.netsport_spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import netsport.netsport_spring.models.Cancha;

@Repository
public interface RepositorioCancha extends JpaRepository<Cancha,Long> {
  public long count();
}
