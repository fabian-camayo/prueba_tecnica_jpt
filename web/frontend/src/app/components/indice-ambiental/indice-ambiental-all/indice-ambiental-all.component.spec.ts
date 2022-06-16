import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceAmbientalAllComponent } from './indice-ambiental-all.component';

describe('IndiceAmbientalAllComponent', () => {
  let component: IndiceAmbientalAllComponent;
  let fixture: ComponentFixture<IndiceAmbientalAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceAmbientalAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceAmbientalAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
