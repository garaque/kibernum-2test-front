import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title = 'Products List';
  products: Product[];

  constructor(private service: ProductsService) { }

  ngOnInit() {
    this.service.findAll().subscribe(products => {
      this.products = products;
    });
  }

}
