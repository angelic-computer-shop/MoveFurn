import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverregComponent } from './driverreg.component';

describe('DriverregComponent', () => {
  let component: DriverregComponent;
  let fixture: ComponentFixture<DriverregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
