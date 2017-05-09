import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierLookupComponent } from './supplier-lookup.component';

describe('SupplierLookupComponent', () => {
  let component: SupplierLookupComponent;
  let fixture: ComponentFixture<SupplierLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
