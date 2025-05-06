package netsport.netsport_spring.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import netsport.netsport_spring.models.Cancha;

@Repository
public interface RepositorioCancha extends JpaRepository<Cancha,Long> {
  public List<Cancha> findByArrendadorId(Long arrendadorId);
  public long countByArrendadorId(Long arrendadorId);
  public long count();
}
