import { Component } from '@angular/core';
import { StaticHeaderComponent } from '../static-header/static-header.component';
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-product-vegetable-powder',
  standalone: true,
  imports: [StaticHeaderComponent, ProductsComponent],
  templateUrl: './product-vegetable-powder.component.html',
  styleUrl: './product-vegetable-powder.component.scss'
})
export class ProductVegetablePowderComponent {
  imgPrefix = '/assets/products/veg-powder/';
  products = [
    {
      name: 'Dehydrated Beetroot',
      details: {
        forms: {
          label: 'Forms',
          value: 'Flakes, Powder, Granuels, Minced'
        },
        shelfLife: {
          label: 'Shelf Life',
          value: '24 Months',
        },
        packing: {
          label: 'Packing',
          value: `20Kg's & 25kg's Inner Poly-liner with PP bags as well as customized packing available`,
        },
        moq: {
          label: 'MOQ',
          value: '200kgs',
        },
        sizes: {
          label: 'Sizes',
          value: 'Flakes (5*5mm) Minced ( 1-3mm, 2-4mm, 3-5mm & above ) , Granules ( 0.2-0.10mm & below ) , Powder ( 120 mesh, 100mesh, 80mesh )',
        },
      },
      img: 'dehydrated-beet.jpg'
    },
  ]
}
