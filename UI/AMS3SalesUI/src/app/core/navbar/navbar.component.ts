import { Component } from '@angular/core';
import { CategoryListComponent } from '../../features/category/category.list/category-list.component';
import { ProductListComponent } from '../../features/product/product.list/product-list.component';




@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CategoryListComponent, ProductListComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}