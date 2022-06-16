import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturaGraficoRefreshComponent } from './temperatura-grafico-refresh.component';

describe('TemperaturaGraficoRefreshComponent', () => {
  let component: TemperaturaGraficoRefreshComponent;
  let fixture: ComponentFixture<TemperaturaGraficoRefreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperaturaGraficoRefreshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperaturaGraficoRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
