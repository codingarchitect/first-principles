import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLookupComponent } from './product-lookup.component';

describe('ProductLookupComponent', () => {
  let component: ProductLookupComponent;
  let fixture: ComponentFixture<ProductLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
