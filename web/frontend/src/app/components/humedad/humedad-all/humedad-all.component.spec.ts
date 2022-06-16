import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumedadAllComponent } from './humedad-all.component';

describe('HumedadAllComponent', () => {
  let component: HumedadAllComponent;
  let fixture: ComponentFixture<HumedadAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumedadAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumedadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
