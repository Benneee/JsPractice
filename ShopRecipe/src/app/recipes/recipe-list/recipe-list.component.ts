import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Sunday Special',
      'White Rice',
      'https://upload.wikimedia.org/wikipedia/commons/9/9b/NIgerian_food.jpg'
    ),

    new Recipe(
      'Your Breakfast',
      'Fried Rice & Turkey',
      'https://i1.wp.com/www.nigerianlazychef.com/wp-content/uploads/2016/12/IMG_6781.jpg'
    )
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
