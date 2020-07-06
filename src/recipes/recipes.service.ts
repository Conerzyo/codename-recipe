import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Recipe } from "src/database/entities/Recipe.entity";
import { Repository } from "typeorm";
import { CreateRecipeDto } from "./dto/CreateRecipeDto";

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private recipesRepo: Repository<Recipe>
  ) {}

  async fetchAllRecipes() {
    const recipes = await this.findAll();
    const parsedRecipes = recipes.map((recipe) => ({
      ...recipe,
      steps: recipe.steps && JSON.parse(recipe.steps),
      ingredients: recipe.ingredients && JSON.parse(recipe.ingredients),
    }));
    return parsedRecipes;
  }

  async createRecipe(recipe: CreateRecipeDto) {
    const createdRecipe = {
      ...recipe,
      createdAt: new Date(),
      servings: recipe.servings || null,
      steps: recipe.steps && JSON.stringify(recipe.steps),
      ingredients: recipe.ingredients && JSON.stringify(recipe.ingredients),
    };
    return await this.recipesRepo.save(createdRecipe);
  }

  async updateRecipe(id: string, updatedRecipe: CreateRecipeDto) {
    const recipe = await this.findOne(id);
    const updated = {
      ...recipe,
      ...updatedRecipe,
    } as Recipe;
    return await this.recipesRepo.save(updated);
  }

  async deleteRecipe(id: string) {
    return await this.recipesRepo.delete(id);
  }

  // OPERATIONS TO GET DATA FROM REPO FOR FURTHER USE
  async findAll() {
    return await this.recipesRepo.find();
  }

  async findOne(id: string) {
    return await this.recipesRepo.findOneOrFail(id);
  }
}
