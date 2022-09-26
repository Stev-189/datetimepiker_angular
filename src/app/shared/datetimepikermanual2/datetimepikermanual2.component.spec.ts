import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datetimepikermanual2Component } from './datetimepikermanual2.component';

describe('Datetimepikermanual2Component', () => {
  let component: Datetimepikermanual2Component;
  let fixture: ComponentFixture<Datetimepikermanual2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Datetimepikermanual2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datetimepikermanual2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
