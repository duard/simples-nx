import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDlgApiComponent } from './crud-dlg-api.component';

describe('CrudDlgApiComponent', () => {
  let component: CrudDlgApiComponent;
  let fixture: ComponentFixture<CrudDlgApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudDlgApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDlgApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
