import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReservasArrendadorComponent } from './ver-reservas-arrendador.component';

describe('VerReservasArrendadorComponent', () => {
  let component: VerReservasArrendadorComponent;
  let fixture: ComponentFixture<VerReservasArrendadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerReservasArrendadorComponent]
    });
    fixture = TestBed.createComponent(VerReservasArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
