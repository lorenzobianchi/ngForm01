import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBtnFormComponent } from './select-btn-form.component';

describe('SelectBtnFormComponent', () => {
  let component: SelectBtnFormComponent;
  let fixture: ComponentFixture<SelectBtnFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBtnFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBtnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
