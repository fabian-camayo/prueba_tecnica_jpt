import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelGraficoRefreshComponent } from './nivel-grafico-refresh.component';

describe('NivelGraficoRefreshComponent', () => {
  let component: NivelGraficoRefreshComponent;
  let fixture: ComponentFixture<NivelGraficoRefreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelGraficoRefreshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelGraficoRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
