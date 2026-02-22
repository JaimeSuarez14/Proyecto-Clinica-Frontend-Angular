import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonPaginacion } from './boton-paginacion';

describe('BotonPaginacion', () => {
  let component: BotonPaginacion;
  let fixture: ComponentFixture<BotonPaginacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonPaginacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonPaginacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
