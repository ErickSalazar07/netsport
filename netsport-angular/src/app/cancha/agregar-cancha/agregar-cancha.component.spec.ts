import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCanchaComponent } from './agregar-cancha.component';

describe('AgregarCanchaComponent', () => {
  let component: AgregarCanchaComponent;
  let fixture: ComponentFixture<AgregarCanchaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarCanchaComponent]
    });
    fixture = TestBed.createComponent(AgregarCanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
