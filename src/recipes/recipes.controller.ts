import { Controller, Get } from "@nestjs/common";
import { RecipesService } from "./recipes.service";
import { Recipe } from "src/database/entities/Recipe.entity";

@Controller("recipes")
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  getRecipes(): Promise<Recipe[]> {
    return this.recipesService.fetchAllRecipes();
  }
}
