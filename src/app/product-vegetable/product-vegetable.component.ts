import { Component } from '@angular/core';
import { StaticHeaderComponent } from '../static-header/static-header.component';

@Component({
  selector: 'app-product-vegetable',
  standalone: true,
  imports: [StaticHeaderComponent],
  templateUrl: './product-vegetable.component.html',
  styleUrl: './product-vegetable.component.scss'
})
export class ProductVegetableComponent {

}
