import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalidadComponent } from './mentalidad.component';

describe('MentalidadComponent', () => {
  let component: MentalidadComponent;
  let fixture: ComponentFixture<MentalidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentalidadComponent]
    });
    fixture = TestBed.createComponent(MentalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
