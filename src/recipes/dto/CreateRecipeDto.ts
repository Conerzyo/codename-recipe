import { RecipeStep, RecipeIngredients } from "../types/types";

export interface CreateRecipeDto {
  name: string;
  description?: string;
  steps?: RecipeStep[];
  ingredients?: RecipeIngredients[];
  servings?: number;
}