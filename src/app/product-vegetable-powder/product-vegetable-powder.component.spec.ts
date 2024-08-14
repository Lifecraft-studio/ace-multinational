import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVegetablePowderComponent } from './product-vegetable-powder.component';

describe('ProductVegetablePowderComponent', () => {
  let component: ProductVegetablePowderComponent;
  let fixture: ComponentFixture<ProductVegetablePowderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductVegetablePowderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductVegetablePowderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
