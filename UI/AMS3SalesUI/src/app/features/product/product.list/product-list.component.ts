import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductSevices } from '../Services/product-services.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products?: Product[];

  constructor(private productsService: ProductSevices) { }

  ngOnInit(): void {
    this.productsService.getAllproducts() 
      .subscribe({
        next: (response) => {
          this.products = response;
        }
      });
  }
}
