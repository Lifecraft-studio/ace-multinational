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

    {
      name: 'Dehydrated cabbage',
      details: {
        forms: {
          label: 'Forms',
          value: 'Flakes, Powder'
        },
        packing: {
          label: 'Packing',
          value: `20Kg's & 25kg's Inner Poly-liner with PP bags as well as customized packing available`,
        },
        moq: {
          label: 'MOQ',
          value: '1000 Kgs',
        },
        sizes: {
          label: 'Sizes',
          value: 'Flakes (5*5mm) , Minced ( 1-3mm, 2-4mm, 3-5mm & above ) , Granules ( 0.2-0.10mm & below ) , Powder ( 120 mesh, 100mesh, 80mesh ))',
        },
      },
      img: 'dehydrated-cabbage.jpg'
    },

    {
      name: 'Dehydrated Carrot',
      details: {
        forms: {
          label: 'Forms',
          value: 'Flakes, Powder, Bits, Chopped, Minced, Granules'
        },
        packing: {
          label: 'Packing',
          value: `20Kg's & 25kg's Inner Poly-liner with PP bags as well as customized packing available`,
        },
        moq: {
          label: 'MOQ',
          value: '1000kgs',
        },
        sizes: {
          label: 'Sizes',
          value: 'Flakes (5*5mm) , Minced ( 1-3mm, 2-4mm, 3-5mm & above ) , Granules ( 0.2-0.10mm & below ) , Powder ( 120 mesh, 100mesh, 80mesh )',
        },
      },
      img: 'dehydrated-carrots.jpg'
    },

    {
      name: 'Dehydrated Garlic',
      details: {
        forms: {
          label: 'Forms',
          value: 'Flakes, Powder, Minced, Chopped, Granuels'
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
          value: '1000 kgs',
        },
        sizes: {
          label: 'Sizes',
          value: 'Flakes (5*5mm) , Minced ( 1-3mm, 2-4mm, 3-5mm & above ) , Granules ( 0.2-0.10mm & below ) , Powder ( 120 mesh, 100mesh, 80mesh )',
        },
      },
      img: 'dehydrated-garlic.jpg'
    },

    {
      name: 'Dehydrated Chives',
      details: {
        forms: {
          label: 'Forms',
          value: 'Flakes'
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
          value: 'Flakes (5*5mm) , Minced ( 1-3mm, 2-4mm, 3-5mm & above ) , Granules ( 0.2-0.10mm & below ) , Powder ( 120 mesh, 100mesh, 80mesh )',
        },
      },
      img: 'dehydrated-chives.jpg'
    },

    {
      name: 'Dehydrated Ginger',
      details: {
        forms: {
          label: 'Forms',
          value: 'Powder'
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
          value: 'Flakes (5*5mm) , Minced ( 1-3mm, 2-4mm, 3-5mm & above ) , Granules ( 0.2-0.10mm & below ) , Powder ( 120 mesh, 100mesh, 80mesh )',
        },
      },
      img: 'dehydrated-ginger.jpg'
    },

    {
      name: 'Dehydrated Mango (Amchur)',
      details: {
        forms: {
          label: 'Forms',
          value: 'Powder'
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
          value: 'Flakes (5*5mm) , Minced ( 1-3mm, 2-4mm, 3-5mm & above ) , Granules ( 0.2-0.10mm & below ) , Powder ( 120 mesh, 100mesh, 80mesh )',
        },
      },
      img: 'dehydrated-mango.jpg'
    },

    {
      name: 'Dehydrated Red, White & Pink Onion',
      details: {
        forms: {
          label: 'Forms',
          value: 'Flakes, Powder, Minced, Chopped, Toasted & Fried Dehydrated Onion'
        },
        
        packing: {
          label: 'Packing',
          value: `12Kg's & 14kg's Inner Poly-liner with PP bags as well as customized packing available`,
        },
        moq: {
          label: 'MOQ',
          value: '1000 kgs',
        },
        sizes: {
          label: 'Sizes',
          value: 'Flakes (5*5mm) Minced ( 1-3mm, 2-4mm, 3-5mm & above ) Granules ( 0.2-0.10mm & below ) Powder ( 120 mesh, 100mesh, 80mesh )',
        },
      },
      img: 'dehydrated-onion.jpg'
    },

    {
      name: 'Dehydrated Tomato',
      details: {
        forms: {
          label: 'Forms',
          value: 'Flakes,Powder'
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
          value: 'Flakes (5*5mm) Minced ( 1-3mm, 2-4mm, 3-5mm & above ) Granules ( 0.2-0.10mm & below ) Powder ( 120 mesh, 100mesh, 80mesh )',
        },
      },
      img: 'dehydrated-tomato.jpg'
    },

    {
      name: 'Dehydrated Spinach',
      details: {
        forms: {
          label: 'Forms',
          value: 'Powder'
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
          value: 'Flakes (5*5mm) Minced ( 1-3mm, 2-4mm, 3-5mm & above ) Granules ( 0.2-0.10mm & below ) Powder ( 120 mesh, 100mesh, 80mesh )',
        },
      },
      img: 'dehydrated-spinach.jpg'
    },

    {
      name: 'Dehydrated Corriander',
      details: {
        forms: {
          label: 'Forms',
          value: 'Powder'
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
          value: 'Flakes (5*5mm) , Minced ( 1-3mm, 2-4mm, 3-5mm & above ) , Granules ( 0.2-0.10mm & below ) , Powder ( 120 mesh, 100mesh, 80mesh )',
        },
      },
      img: 'dehydrated-corriander.jpg'
    },

    {
      name: 'Dehydrated Chilli',
      details: {
        forms: {
          label: 'Forms',
          value: 'Flakes, Powder,Kibbled'
        },
        packing: {
          label: 'Packing',
          value: `20Kg's & 25kg's Inner Poly-liner with PP bags as well as customized packing available`,
        },
        moq: {
          label: 'MOQ',
          value: '1000 kgs',
        },
        sizes: {
          label: 'Sizes',
          value: 'Flakes (5*5mm) , Minced ( 1-3mm, 2-4mm, 3-5mm & above ) , Granules ( 0.2-0.10mm & below ) , Powder ( 120 mesh, 100mesh, 80mesh )',
        },
      },
      img: 'dehydrated-chilli.jpg'
    },

    {
      name: 'Dehydrated Curry Leaf',
      details: {
        forms: {
          label: 'Forms',
          value: 'Powder'
        },
        packing: {
          label: 'Packing',
          value: `20Kg's & 25kg's Inner Poly-liner with PP bags as well as customized packing available`,
        },
        shelfLife: {
          label: 'Shelf Life',
          value: '24 Months',
        },
        moq: {
          label: 'MOQ',
          value: '1000 kgs',
        },
        sizes: {
          label: 'Sizes',
          value: 'Flakes (5*5mm) Minced ( 1-3mm, 2-4mm, 3-5mm & above ) Granules ( 0.2-0.10mm & below ) Powder ( 120 mesh, 100mesh, 80mesh )',
        },
      },
      img: 'dehydrated-curry.jpg'
    },

    
    {
      name: 'Dehydrated French Beans',
      details: {
        forms: {
          label: 'Forms',
          value: 'Flakes'
        },
        packing: {
          label: 'Packing',
          value: `20Kg's & 25kg's Inner Poly-liner with PP bags as well as customized packing available`,
        },
        moq: {
          label: 'MOQ',
          value: '200 kgs',
        },
        shelfLife: {
          label: 'Shelf Life',
          value: '24 Months',
        },
        sizes: {
          label: 'Sizes',
          value: 'Flakes (5*5mm) Minced ( 1-3mm, 2-4mm, 3-5mm & above ) , Granules ( 0.2-0.10mm & below ) , Powder ( 120 mesh, 100mesh, 80mesh )',
        },
      },
      img: 'dehydrated-frenchbeans.jpg'
    },
  ]
}
