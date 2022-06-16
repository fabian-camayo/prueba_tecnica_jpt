import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturaGraficoStaticComponent } from './temperatura-grafico-static.component';

describe('TemperaturaGraficoStaticComponent', () => {
  let component: TemperaturaGraficoStaticComponent;
  let fixture: ComponentFixture<TemperaturaGraficoStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperaturaGraficoStaticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperaturaGraficoStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
