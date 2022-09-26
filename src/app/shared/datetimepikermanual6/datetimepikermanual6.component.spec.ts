import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datetimepikermanual6Component } from './datetimepikermanual6.component';

describe('Datetimepikermanual6Component', () => {
  let component: Datetimepikermanual6Component;
  let fixture: ComponentFixture<Datetimepikermanual6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Datetimepikermanual6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datetimepikermanual6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
