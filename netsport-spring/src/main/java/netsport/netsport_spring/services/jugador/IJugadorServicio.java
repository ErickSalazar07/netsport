package netsport.netsport_spring.services.jugador;

import java.util.List;

import netsport.netsport_spring.models.Jugador;

public interface IJugadorServicio {
  public Jugador findById(Long id);
  public Jugador findByUsuarioAndPassword(String usuario, String password);
  public List<Jugador> findAll();
  public void addJugador(Jugador jugador);
  public void updateJugador(Jugador jugador);
  public void deleteById(Long id);
  public Long numJugadores();
}