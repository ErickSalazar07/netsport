package netsport.netsport_spring.models;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Cancha {
  
  @Id
  @GeneratedValue
  private Long id;

  @Column(nullable = false)
  private String tipoCancha;

  @Column(nullable = false, name = "num_max_jugadores")
  private Integer numMaxJugadores;

  @Column(nullable = false)
  private String direccion;

  @Column(nullable = false)
  private Boolean disponible;

  @ManyToOne
  @JoinColumn(nullable = false, name = "id_arrendador", referencedColumnName = "id")
  private Arrendador arrendador;

  @JsonIgnore
  @OneToMany(mappedBy = "cancha", cascade = CascadeType.ALL)
  private List<Reserva> reservas = new ArrayList<>();

  public Cancha() { }

  public Cancha(String tipoCancha, Integer numMaxJugadores, String direccion,
  Boolean disponible) {

    this.tipoCancha = tipoCancha;
    this.numMaxJugadores = numMaxJugadores;
    this.direccion = direccion;
    this.disponible = disponible;
  }

  public Long getId() { return id; }
  public void setId(Long id) { this.id = id; }
  public String getTipoCancha() { return tipoCancha; }
  public void setTipoCancha(String tipoCancha) { this.tipoCancha = tipoCancha; }
  public Integer getNumMaxJugadores() { return numMaxJugadores; }
  public void setNumMaxJugadores(Integer numMaxJugadores) { this.numMaxJugadores = numMaxJugadores; }
  public String getDireccion() { return direccion; }
  public void setDireccion(String direccion) { this.direccion = direccion; }
  public Boolean getDisponible() { return disponible; }
  public void setDisponible(Boolean disponible) { this.disponible = disponible; }
  public Arrendador getArrendador() { return arrendador; }
  public void setArrendador(Arrendador arrendador) { this.arrendador = arrendador; }
  public List<Reserva> getReservas() { return reservas; }
  public void setReservas(List<Reserva> reservas) { this.reservas = reservas; }
}
