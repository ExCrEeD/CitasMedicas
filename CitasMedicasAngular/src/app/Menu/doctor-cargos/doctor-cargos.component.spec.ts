import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCargosComponent } from './doctor-cargos.component';

describe('DoctorCargosComponent', () => {
  let component: DoctorCargosComponent;
  let fixture: ComponentFixture<DoctorCargosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorCargosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorCargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
