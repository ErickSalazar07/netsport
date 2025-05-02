package netsport.netsport_spring.services.arrendador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import netsport.netsport_spring.models.Arrendador;
import netsport.netsport_spring.repositories.RepositorioArrendador;

@Service
public class ArrendadorServicio implements IArrendadorServicio {

  @Autowired
  RepositorioArrendador repositorioArrendador;

  @Override
  public Arrendador findById(Long id) {
    return repositorioArrendador.findById(id).orElse(null);
  }

  @Override
  public List<Arrendador> findAll() {
    return repositorioArrendador.findAll();
  }

  @Override
  public Arrendador findByUsuarioAndContrasena(String usuario, String contrasena) {
    return repositorioArrendador.findByUsuarioAndContrasena(usuario, contrasena).orElse(null);
  }

  @Override
  public void addArrendador(Arrendador arrendador) {
    repositorioArrendador.save(arrendador);
  }

  @Override
  public void updateArrendador(Arrendador arrendador) {
    repositorioArrendador.save(arrendador);
  }

  @Override
  public void deleteById(Long id) {
    repositorioArrendador.deleteById(id);
  }

  @Override
  public Long numArrendadores() {
    return repositorioArrendador.count();
  }
  
}
