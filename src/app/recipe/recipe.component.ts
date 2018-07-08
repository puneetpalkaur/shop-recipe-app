import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes: Recipe[] = [new Recipe('first recipe', 'a test' , 'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556_1280.jpg')] ;

  constructor() { }

  ngOnInit() {
  }

}
