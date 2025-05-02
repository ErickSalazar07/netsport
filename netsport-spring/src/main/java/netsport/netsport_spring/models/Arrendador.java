package netsport.netsport_spring.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Arrendador {

  @Id
  @GeneratedValue
  private Long id;

  @Column(nullable = false)
  private String nombre;

  @Column(nullable = false)
  private String usuario;
  
  @Column(nullable = false)
  private String contrasena;

  @OneToMany(mappedBy = "arrendador", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Cancha> canchas = new ArrayList<>();

  public Arrendador() { }

  public Arrendador(String nombre, String usuario, String contrasena) {
    this.nombre = nombre;
    this.usuario = usuario;
    this.contrasena = contrasena;
  }

  public Long getId() { return id; }
  public void setId(Long id) { this.id = id; }
  public String getNombre() { return nombre; }
  public void setNombre(String nombre) { this.nombre = nombre; }
  public String getUsuario() { return usuario; }
  public void setUsuario(String usuario) { this.usuario = usuario; }
  public String getContrasena() { return contrasena; }
  public void setContrasena(String contrasena) { this.contrasena = contrasena; }
  public List<Cancha> getCanchas() { return canchas; }
  public void setCanchas(List<Cancha> canchas) { this.canchas = canchas; }

}
