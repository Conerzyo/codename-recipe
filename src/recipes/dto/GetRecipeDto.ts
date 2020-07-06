export interface GetRecipeDto {
  readonly id: number | string;
  readonly date: string | Date;
  readonly name: string;
  readonly description: string;
}
