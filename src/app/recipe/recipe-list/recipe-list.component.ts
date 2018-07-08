import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [ new Recipe('Strawberry Cake', 'a test' ,
    'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556_1280.jpg'),
    new Recipe('Tiramisu', 'a test' ,
      'https://cdn.pixabay.com/photo/2017/03/19/18/22/italian-food-2157243_1280.jpg')] ;
  constructor() { }

  ngOnInit() {
  }

}
