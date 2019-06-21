import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivCitaComponent } from './div-cita.component';

describe('DivCitaComponent', () => {
  let component: DivCitaComponent;
  let fixture: ComponentFixture<DivCitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivCitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
