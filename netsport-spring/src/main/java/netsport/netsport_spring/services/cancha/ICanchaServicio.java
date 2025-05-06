package netsport.netsport_spring.services.cancha;

import java.util.List;

import netsport.netsport_spring.models.Cancha;

public interface ICanchaServicio {
  public Cancha findById(Long id);
  public List<Cancha> findAll();
  public List<Cancha> findByArrendadorId(Long arrendadorId);
  public void addCancha(Cancha cancha);
  public void updateCancha(Cancha cancha);
  public void deleteById(Long id);
  public Long numCanchas();
  public Long numCanchasByArrendadorId(Long arrendadorId);
}
