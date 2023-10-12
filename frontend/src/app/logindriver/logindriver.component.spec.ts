import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindriverComponent } from './logindriver.component';

describe('LogindriverComponent', () => {
  let component: LogindriverComponent;
  let fixture: ComponentFixture<LogindriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogindriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogindriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
