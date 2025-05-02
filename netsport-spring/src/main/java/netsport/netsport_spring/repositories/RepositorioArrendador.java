package netsport.netsport_spring.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import netsport.netsport_spring.models.Arrendador;

@Repository
public interface RepositorioArrendador extends JpaRepository<Arrendador,Long> {
  
  public Optional<Arrendador> findByUsuarioAndContrasena(String usuario, String contrasena);

  public long count();
}