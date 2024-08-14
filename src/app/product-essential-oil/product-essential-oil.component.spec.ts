import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEssentialOilComponent } from './product-essential-oil.component';

describe('ProductEssentialOilComponent', () => {
  let component: ProductEssentialOilComponent;
  let fixture: ComponentFixture<ProductEssentialOilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductEssentialOilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductEssentialOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
