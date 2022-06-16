import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumedadGraficoStaticComponent } from './humedad-grafico-static.component';

describe('HumedadGraficoStaticComponent', () => {
  let component: HumedadGraficoStaticComponent;
  let fixture: ComponentFixture<HumedadGraficoStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumedadGraficoStaticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumedadGraficoStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
