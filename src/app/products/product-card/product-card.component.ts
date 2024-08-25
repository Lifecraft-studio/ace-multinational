import { KeyValuePipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  standalone: true,
  styleUrls: ['./product-card.component.scss'],
  imports: [KeyValuePipe]
})
export class ProductCardComponent {
  @Input() productDetails: any;
  @Input() imgPrefix = '';


  constructor() { }

}
