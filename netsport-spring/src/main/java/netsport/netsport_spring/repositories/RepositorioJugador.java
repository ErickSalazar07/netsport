package netsport.netsport_spring.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import netsport.netsport_spring.models.Jugador;

@Repository
public interface RepositorioJugador extends JpaRepository<Jugador,Long> {

  public Optional<Jugador> findByUsuarioAndPassword(String usuario, String password);

  public long count();
}
