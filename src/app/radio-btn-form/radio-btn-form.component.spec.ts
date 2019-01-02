import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioBtnFormComponent } from './radio-btn-form.component';

describe('RadioBtnFormComponent', () => {
  let component: RadioBtnFormComponent;
  let fixture: ComponentFixture<RadioBtnFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioBtnFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioBtnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
