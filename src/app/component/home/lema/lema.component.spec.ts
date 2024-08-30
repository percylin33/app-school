import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemaComponent } from './lema.component';

describe('LemaComponent', () => {
  let component: LemaComponent;
  let fixture: ComponentFixture<LemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LemaComponent]
    });
    fixture = TestBed.createComponent(LemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
