import { Component } from '@angular/core';
import { AddCategoryRequest } from "../../models/AddCategoryRequest";

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
 model: AddCategoryRequest

 constructor(){
  this.model = {
    description: 'ams'
  };
 }
 onFormSubmit(){
  console.log(this.model)
 }
}
