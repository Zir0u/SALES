import { Routes } from '@angular/router';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { AddProductComponent } from './features/product/add-product/add-product.component';
import { CategoryListComponent } from './features/category/category.list/category-list.component';
import { ProductListComponent } from './features/product/product.list/product-list.component';


export const routes: Routes = [
    {
        path: 'admim/categories',
        component: CategoryListComponent
    },
    {
        path: 'admim/categories/add',
        component: AddCategoryComponent
    }, 
    {
        path: 'admim/products',
        component: ProductListComponent
    },
    {
        path: 'admim/products/add',
        component: AddProductComponent
    },
];
