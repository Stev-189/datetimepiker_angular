import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimepikermanualComponent } from './datetimepikermanual.component';

describe('DatetimepikermanualComponent', () => {
  let component: DatetimepikermanualComponent;
  let fixture: ComponentFixture<DatetimepikermanualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatetimepikermanualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatetimepikermanualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
