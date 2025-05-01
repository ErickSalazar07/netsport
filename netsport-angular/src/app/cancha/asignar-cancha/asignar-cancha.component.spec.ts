import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarCanchaComponent } from './asignar-cancha.component';

describe('AsignarCanchaComponent', () => {
  let component: AsignarCanchaComponent;
  let fixture: ComponentFixture<AsignarCanchaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarCanchaComponent]
    });
    fixture = TestBed.createComponent(AsignarCanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
