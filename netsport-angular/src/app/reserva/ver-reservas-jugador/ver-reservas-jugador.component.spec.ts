import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReservasJugadorComponent } from './ver-reservas-jugador.component';

describe('VerReservasJugadorComponent', () => {
  let component: VerReservasJugadorComponent;
  let fixture: ComponentFixture<VerReservasJugadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerReservasJugadorComponent]
    });
    fixture = TestBed.createComponent(VerReservasJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
