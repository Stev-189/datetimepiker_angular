import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datetimepikermanual4Component } from './datetimepikermanual4.component';

describe('Datetimepikermanual4Component', () => {
  let component: Datetimepikermanual4Component;
  let fixture: ComponentFixture<Datetimepikermanual4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Datetimepikermanual4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datetimepikermanual4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
