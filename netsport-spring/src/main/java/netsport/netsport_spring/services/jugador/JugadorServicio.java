package netsport.netsport_spring.services.jugador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import netsport.netsport_spring.models.Jugador;
import netsport.netsport_spring.repositories.RepositorioJugador;

@Service
public class JugadorServicio implements IJugadorServicio {

  @Autowired
  RepositorioJugador repositorioJugador;

  @Override
  public Jugador findById(Long id) {
    return repositorioJugador.findById(id).orElse(null);
  }

  @Override
  public Jugador findByUsuarioAndPassword(String usuario, String password) {
    return repositorioJugador.findByUsuarioAndPassword(usuario, password).orElse(null);
  }

  @Override
  public List<Jugador> findAll() {
    return repositorioJugador.findAll();
  }

  @Override
  public void addJugador(Jugador jugador) {
    repositorioJugador.save(jugador);
  }

  @Override
  public void updateJugador(Jugador jugador) {
    repositorioJugador.save(jugador);
  }

  @Override
  public void deleteById(Long id) {
    repositorioJugador.deleteById(id);
  }

  @Override
  public Long numJugadores() {
    return repositorioJugador.count();
  }
  
}
