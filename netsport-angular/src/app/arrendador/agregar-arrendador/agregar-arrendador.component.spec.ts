import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarArrendadorComponent } from './agregar-arrendador.component';

describe('AgregarArrendadorComponent', () => {
  let component: AgregarArrendadorComponent;
  let fixture: ComponentFixture<AgregarArrendadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarArrendadorComponent]
    });
    fixture = TestBed.createComponent(AgregarArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
