import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMedicinesComponent } from './container-medicines.component';

describe('ContainerMedicinesComponent', () => {
  let component: ContainerMedicinesComponent;
  let fixture: ComponentFixture<ContainerMedicinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerMedicinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
