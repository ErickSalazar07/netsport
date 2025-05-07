import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardJugadorComponent } from './dashboard-jugador.component';

describe('DashboardJugadorComponent', () => {
  let component: DashboardJugadorComponent;
  let fixture: ComponentFixture<DashboardJugadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardJugadorComponent]
    });
    fixture = TestBed.createComponent(DashboardJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
