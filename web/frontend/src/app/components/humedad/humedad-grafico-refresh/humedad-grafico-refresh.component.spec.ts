import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumedadGraficoRefreshComponent } from './humedad-grafico-refresh.component';

describe('HumedadGraficoRefreshComponent', () => {
  let component: HumedadGraficoRefreshComponent;
  let fixture: ComponentFixture<HumedadGraficoRefreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumedadGraficoRefreshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumedadGraficoRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
