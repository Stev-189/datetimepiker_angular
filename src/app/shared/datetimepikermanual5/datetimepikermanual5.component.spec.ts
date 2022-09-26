import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datetimepikermanual5Component } from './datetimepikermanual5.component';

describe('Datetimepikermanual5Component', () => {
  let component: Datetimepikermanual5Component;
  let fixture: ComponentFixture<Datetimepikermanual5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Datetimepikermanual5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datetimepikermanual5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
