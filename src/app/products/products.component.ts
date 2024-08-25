import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: true,
  imports: [ProductCardComponent],
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  @Input('products') products: any;
  @Input('imgPrefix') imgPrefix = '';

  constructor() { }
  ngOnInit(): void {
    document.body.scrollTop = 0;
  }
}
