import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datetimepikermanual3Component } from './datetimepikermanual3.component';

describe('Datetimepikermanual3Component', () => {
  let component: Datetimepikermanual3Component;
  let fixture: ComponentFixture<Datetimepikermanual3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Datetimepikermanual3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datetimepikermanual3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
