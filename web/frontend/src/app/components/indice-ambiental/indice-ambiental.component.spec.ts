import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceAmbientalComponent } from './indice-ambiental.component';

describe('IndiceAmbientalComponent', () => {
  let component: IndiceAmbientalComponent;
  let fixture: ComponentFixture<IndiceAmbientalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceAmbientalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceAmbientalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
