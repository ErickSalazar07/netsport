package netsport.netsport_spring.models;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Controller;

import jakarta.transaction.Transactional;
import netsport.netsport_spring.repositories.RepositorioArrendador;
import netsport.netsport_spring.repositories.RepositorioCancha;
import netsport.netsport_spring.repositories.RepositorioJugador;
import netsport.netsport_spring.repositories.RepositorioReserva;

@Controller
@Transactional
public class DatabaseInit implements ApplicationRunner {

  @Autowired
  RepositorioArrendador repositorioArrendador;

  @Autowired
  RepositorioCancha repositorioCancha;

  @Autowired
  RepositorioJugador repositorioJugador;

  @Autowired
  RepositorioReserva repositorioReserva;

  @Override
  public void run(ApplicationArguments args) throws Exception {

    cargarArrendadores();
    cargarJugadores();
    cargarCanchas();
    cargarReservas(); //! Se cargan de ultimas las reservas(fuertemente asociado)
    
  }
  
  private void cargarArrendadores() {
    try(BufferedReader br = new BufferedReader(new InputStreamReader(getClass().getClassLoader().
    getResourceAsStream("init-data/arrendadores.txt")))) {
      String linea;
      String datos[];

      while((linea = br.readLine()) != null) {
        datos = linea.split(",");
        repositorioArrendador.save(new Arrendador(datos[0],datos[1],datos[2]));
      }

      System.out.println("\n\n\n\033[36mSE CARGARON LOS ARRENDADORES.\033[0m\n\n\n");
    } catch(IOException e){
      System.err.println("Error: Leyendo el archivo: " + e.getMessage());
    } catch(Exception e) {
      System.err.println("Error: " + e.getMessage());
    }
  }

  private void cargarCanchas() {
    try(BufferedReader br = new BufferedReader(new InputStreamReader(getClass().getClassLoader().
    getResourceAsStream("init-data/canchas.txt")))) {

      String linea, datos[];
      Long randomId;
      Long CANTIDAD_ARRENDADORES = repositorioArrendador.count();
      Random random = new Random(42);
      Cancha cancha;

      while((linea = br.readLine()) != null) {
        datos = linea.split(",");
        cancha = new Cancha(datos[0],Integer.parseInt(datos[1]),
                datos[2],Boolean.parseBoolean(datos[3]));
        randomId = 1L + (random.nextLong()%CANTIDAD_ARRENDADORES);
        if(randomId < 1L) randomId += CANTIDAD_ARRENDADORES;
        cancha.setArrendador(repositorioArrendador.findById(randomId).get());
        repositorioCancha.save(cancha);
      }
      System.out.println("\n\n\n\033[36mSE CARGARON LAS CANCHAS.\033[0m\n\n\n");
    } catch(IOException e) {
      System.err.println("Error: Leyendo el archivo: " + e.getMessage());
    } catch(Exception e) {
      System.err.println("Error: " + e.getMessage());
    }
  }

  private void cargarJugadores() {
    try(BufferedReader br = new BufferedReader(new InputStreamReader(getClass().getClassLoader().
    getResourceAsStream("init-data/jugadores.txt")))) {
      String linea,datos[];

      while((linea = br.readLine()) != null) {
        datos = linea.split(",");
        repositorioJugador.save(new Jugador(datos[0], datos[1], datos[2], datos[3],
          LocalTime.parse(datos[4]),Integer.parseInt(datos[5]), Integer.parseInt(datos[6])));
      }
      System.out.println("\n\n\n\033[36mSE CARGARON LOS JUGADORES.\033[0m\n\n\n");
    } catch(IOException e) {
      System.err.println("Error: Leyendo el archivo: " + e.getMessage());
    } catch(Exception e) {
      System.err.println("Error: " + e.getMessage());
    }
  }

  private void cargarReservas() {
    try (BufferedReader br = new BufferedReader(new InputStreamReader(getClass().getClassLoader()
    .getResourceAsStream("init-data/reservas.txt")))) {

      DateTimeFormatter formato = DateTimeFormatter.ofPattern("yyyy-MM-dd");
      String linea;
      String[] datos;
      Long totalCanchas = repositorioCancha.count();
      Long totalJugadores = repositorioJugador.count();
      Random randCancha = new Random(43);
      Random randJugador = new Random(44);

      while ((linea = br.readLine()) != null) {
        datos = linea.split(",");

        Reserva reserva = new Reserva(
          LocalDate.parse(datos[0], formato),
          LocalTime.parse(datos[1]),
          LocalTime.parse(datos[2]),
          Double.parseDouble(datos[3])
        );

        Long idCancha = 1L + randCancha.nextInt(totalCanchas.intValue());
        Long idJugador = 1L + randJugador.nextInt(totalJugadores.intValue());

        Cancha cancha = repositorioCancha.findById(idCancha).orElse(null);
        cancha.setDisponible(false);
        repositorioCancha.save(cancha);

        reserva.setCancha(cancha);
        reserva.setJugador(repositorioJugador.findById(idJugador).orElse(null));

        repositorioReserva.save(reserva);
      }
      System.out.println("\n\n\n\033[36mSE CARGARON LAS RESERVAS.\033[0m\n\n\n");
    } catch (IOException e) {
      System.err.println("Error leyendo el archivo: " + e.getMessage());
    } catch (Exception e) {
      System.err.println("Error general: " + e.getMessage());
    }
  }
}
