package netsport.netsport_spring.models;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Jugador {

  @Id
  @GeneratedValue
  private Long id;

  @Column(nullable = false)
  private String nombre;

  @Column(nullable = false)
  private String usuario;

  @Column(nullable = false)
  private String contrasena;

  @Column(nullable = false, name = "tipo_deporte")
  private String tipoDeporte;

  @Column(nullable = false, name = "hora_disponible")
  private LocalTime horaDisponible;

  @Column(nullable = false, name = "num_partidos_ganados")
  private Integer numPartidosGanados;

  @Column(nullable = false, name = "num_partidos_perdidos")
  private Integer numPartidosPerdidos;

  @JsonIgnore
  @OneToMany(mappedBy = "jugador",cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Reserva> reservas = new ArrayList<>();

  public Jugador() { }

  public Jugador(String nombre, String usuario, String contrasena, String tipoDeporte,
  LocalTime horaDisponible, Integer numPartidosGanados, Integer numPartidosPerdidos) {

    this.nombre = nombre;
    this.usuario = usuario;
    this.contrasena = contrasena;
    this.tipoDeporte = tipoDeporte;
    this.horaDisponible = horaDisponible;
    this.numPartidosGanados = numPartidosGanados;
    this.numPartidosPerdidos = numPartidosPerdidos;

  }

  public Long getId() { return id; }
  public void setId(Long id) { this.id = id; }
  public String getNombre() { return nombre; }
  public void setNombre(String nombre) { this.nombre = nombre; }
  public String getUsuario() { return usuario; }
  public void setUsuario(String usuario) { this.usuario = usuario; }
  public String getContrasena() { return contrasena; }
  public void setContrasena(String contrasena) { this.contrasena = contrasena; }
  public String getTipoDeporte() { return tipoDeporte; }
  public void setTipoDeporte(String tipoDeporte) { this.tipoDeporte = tipoDeporte; }
  public LocalTime getHoraDisponible() { return horaDisponible; }
  public void setHoraDisponible(LocalTime horaDisponible) { this.horaDisponible = horaDisponible; }
  public Integer getNumPartidosGanados() { return numPartidosGanados; }
  public void setNumPartidosGanados(Integer numPartidosGanados) { this.numPartidosGanados = numPartidosGanados; }
  public Integer getNumPartidosPerdidos() { return numPartidosPerdidos; }
  public void setNumPartidosPerdidos(Integer numPartidosPerdidos) { this.numPartidosPerdidos = numPartidosPerdidos; }
  public List<Reserva> getReservas() { return reservas; }
  public void setReservas(List<Reserva> reservas) { this.reservas = reservas; }
}
