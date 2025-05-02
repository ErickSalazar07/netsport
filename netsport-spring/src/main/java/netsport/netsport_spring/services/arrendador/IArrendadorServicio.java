package netsport.netsport_spring.services.arrendador;

import java.util.List;

import netsport.netsport_spring.models.Arrendador;

public interface IArrendadorServicio {
  public Arrendador findById(Long id);
  public List<Arrendador> findAll();
  public Arrendador findByUsuarioAndContrasena(String usuario, String contrasena);
  public void addArrendador(Arrendador arrendador);
  public void updateArrendador(Arrendador arrendador);
  public void deleteById(Long id);
  public Long numArrendadores();
}
