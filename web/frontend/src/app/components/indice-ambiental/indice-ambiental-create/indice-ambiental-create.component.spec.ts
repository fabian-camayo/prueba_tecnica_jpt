import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceAmbientalCreateComponent } from './indice-ambiental-create.component';

describe('IndiceAmbientalCreateComponent', () => {
  let component: IndiceAmbientalCreateComponent;
  let fixture: ComponentFixture<IndiceAmbientalCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceAmbientalCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceAmbientalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
