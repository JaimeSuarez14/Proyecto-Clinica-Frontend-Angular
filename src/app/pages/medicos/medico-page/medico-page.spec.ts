import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoPage } from './medico-page';

describe('MedicoPage', () => {
  let component: MedicoPage;
  let fixture: ComponentFixture<MedicoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicoPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicoPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
