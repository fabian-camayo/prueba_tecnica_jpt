import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelAllComponent } from './nivel-all.component';

describe('NivelAllComponent', () => {
  let component: NivelAllComponent;
  let fixture: ComponentFixture<NivelAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
