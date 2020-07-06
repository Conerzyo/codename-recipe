export interface Recipe {
  id: string | number; // TODO will be changed later
  createAt: string | Date;
  name: string;
  description?: string;
}

export default Recipe;