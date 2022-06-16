import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelGraficoStaticComponent } from './nivel-grafico-static.component';

describe('NivelGraficoStaticComponent', () => {
  let component: NivelGraficoStaticComponent;
  let fixture: ComponentFixture<NivelGraficoStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelGraficoStaticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelGraficoStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
