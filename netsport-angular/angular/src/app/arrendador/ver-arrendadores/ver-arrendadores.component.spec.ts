import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerArrendadoresComponent } from './ver-arrendadores.component';

describe('VerArrendadoresComponent', () => {
  let component: VerArrendadoresComponent;
  let fixture: ComponentFixture<VerArrendadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerArrendadoresComponent]
    });
    fixture = TestBed.createComponent(VerArrendadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
