import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarJugadorComponent } from './agregar-jugador.component';

describe('AgregarJugadorComponent', () => {
  let component: AgregarJugadorComponent;
  let fixture: ComponentFixture<AgregarJugadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarJugadorComponent]
    });
    fixture = TestBed.createComponent(AgregarJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
