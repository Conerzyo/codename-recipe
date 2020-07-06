export type RecipeStep = {
  nth: string | number;
  text: string;
  time: number;
};

export type RecipeIngredients = {
  name: string;
  quantity: string;
  measurement: string;
};
export interface Recipe {
  id: string | number; // TODO will be changed later
  createAt: string | Date;
  name: string;
  description?: string;
  steps?: RecipeStep[];
  ingredients?: RecipeIngredients[];
  servings?: number;
}
