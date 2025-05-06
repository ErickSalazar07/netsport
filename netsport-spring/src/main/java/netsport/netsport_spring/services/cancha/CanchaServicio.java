package netsport.netsport_spring.services.cancha;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import netsport.netsport_spring.models.Cancha;
import netsport.netsport_spring.repositories.RepositorioCancha;

@Service
public class CanchaServicio implements ICanchaServicio {

  @Autowired
  RepositorioCancha repositorioCancha;

  @Override
  public Cancha findById(Long id) {
    return repositorioCancha.findById(id).orElse(null);
  }

  @Override
  public List<Cancha> findAll() {
    return repositorioCancha.findAll();
  }

  @Override
  public List<Cancha> findByArrendadorId(Long idArrendador) {
    return repositorioCancha.findByArrendadorId(idArrendador);
  }

  @Override
  public void addCancha(Cancha cancha) {
    repositorioCancha.save(cancha);
  }

  @Override
  public void updateCancha(Cancha cancha) {
    repositorioCancha.save(cancha);
  }

  @Override
  public void deleteById(Long id) {
    repositorioCancha.deleteById(id);
  }

  @Override
  public Long numCanchas() {
    return repositorioCancha.count();
  }

  @Override
  public Long numCanchasByArrendadorId(Long arrendadorId) {
    return repositorioCancha.countByArrendadorId(arrendadorId);
  }
}
