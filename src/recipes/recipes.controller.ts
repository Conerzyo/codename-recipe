import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from "@nestjs/common";
import { RecipesService } from "./recipes.service";
import { Recipe } from "src/database/entities/Recipe.entity";
import { CreateRecipeDto } from "./dto/CreateRecipeDto";

@Controller("recipes")
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  getRecipes(): Promise<Recipe[]> {
    return this.recipesService.fetchAllRecipes();
  }

  @Post()
  addRecipe(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipesService.createRecipe(createRecipeDto);
  }

  @Put(":id")
  updateRecipe(@Param("id") id: string, @Body() updateRecipe: CreateRecipeDto) {
    return this.recipesService.updateRecipe(id, updateRecipe);
  }

  @Delete(":id")
  deleteRecipe(@Param("id") id: string) {
    return this.recipesService.deleteRecipe(id);
  }
}
