import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerJugadoresComponent } from './ver-jugadores.component';

describe('VerJugadoresComponent', () => {
  let component: VerJugadoresComponent;
  let fixture: ComponentFixture<VerJugadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerJugadoresComponent]
    });
    fixture = TestBed.createComponent(VerJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
