import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategorySevicesService } from '../Services/category-sevices.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {

  categories?: Category[];

  constructor(private categoriesService: CategorySevicesService) { }

  ngOnInit(): void {
    this.categoriesService.getAllCategories()
      .subscribe({
        next: (response) => {
          this.categories = response;
        }
      });
  }
}
