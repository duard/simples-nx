import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDlgApiComponent } from './form.component';

describe('FormDlgApiComponent', () => {
  let component: FormDlgApiComponent;
  let fixture: ComponentFixture<FormDlgApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDlgApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDlgApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
