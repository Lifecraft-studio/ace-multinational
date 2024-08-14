import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVegetableComponent } from './product-vegetable.component';

describe('ProductVegetableComponent', () => {
  let component: ProductVegetableComponent;
  let fixture: ComponentFixture<ProductVegetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductVegetableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductVegetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
