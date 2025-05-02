package netsport.netsport_spring.models;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Reserva {
  
  @Id
  @GeneratedValue
  private Long id;

  @Column(nullable = false)
  private LocalDate fecha;

  @Column(nullable = false, name = "hora_ingreso")
  private LocalTime horaIngreso;

  @Column(nullable = false, name = "hora_salida")
  private LocalTime horaSalida;

  @Column(nullable = false, name = "valor_pagar")
  private Double valorPagar;

  @ManyToOne
  @JoinColumn(nullable = false, name = "id_cancha", referencedColumnName = "id")
  private Cancha cancha;

  @ManyToOne
  @JoinColumn(nullable = false, name = "id_jugador", referencedColumnName = "id")
  private Jugador jugador;

  public Reserva() { }

  public Reserva(LocalDate fecha, LocalTime horaIngreso, LocalTime horaSalida, Double valorPagar) {
    this.fecha = fecha;
    this.horaIngreso = horaIngreso;
    this.horaSalida = horaSalida;
    this.valorPagar = valorPagar;
  }

  public Long getId() { return id; }
  public void setId(Long id) { this.id = id; }
  public LocalDate getFecha() { return fecha; }
  public void setFecha(LocalDate fecha) { this.fecha = fecha; }
  public LocalTime getHoraIngreso() { return horaIngreso; }
  public void setHoraIngreso(LocalTime horaIngreso) { this.horaIngreso = horaIngreso; }
  public LocalTime getHoraSalida() { return horaSalida; }
  public void setHoraSalida(LocalTime horaSalida) { this.horaSalida = horaSalida; }
  public Double getValorPagar() { return valorPagar; }
  public void setValorPagar(Double valorPagar) { this.valorPagar = valorPagar; }
  public Cancha getCancha() { return cancha; }
  public void setCancha(Cancha cancha) { this.cancha = cancha; }
  public Jugador getJugador() { return jugador; }
  public void setJugador(Jugador jugador) { this.jugador = jugador; }
}
