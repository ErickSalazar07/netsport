import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCanchasComponent } from './ver-canchas.component';

describe('VerCanchasComponent', () => {
  let component: VerCanchasComponent;
  let fixture: ComponentFixture<VerCanchasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerCanchasComponent]
    });
    fixture = TestBed.createComponent(VerCanchasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
