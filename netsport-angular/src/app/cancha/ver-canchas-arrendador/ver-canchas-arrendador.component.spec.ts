import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCanchasArrendadorComponent } from './ver-canchas-arrendador.component';

describe('VerCanchasArrendadorComponent', () => {
  let component: VerCanchasArrendadorComponent;
  let fixture: ComponentFixture<VerCanchasArrendadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerCanchasArrendadorComponent]
    });
    fixture = TestBed.createComponent(VerCanchasArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
