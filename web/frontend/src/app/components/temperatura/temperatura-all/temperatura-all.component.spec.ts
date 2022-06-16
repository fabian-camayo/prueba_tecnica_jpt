import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturaAllComponent } from './temperatura-all.component';

describe('TemperaturaAllComponent', () => {
  let component: TemperaturaAllComponent;
  let fixture: ComponentFixture<TemperaturaAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperaturaAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperaturaAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
