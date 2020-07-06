import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Recipe } from "src/database/entities/Recipe.entity";
import { Repository } from "typeorm";

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private recipesRepo: Repository<Recipe>
  ) {}

  async fetchAllRecipes() {
    const recipes = await this.findAll();
    return recipes;
  }

  // OPERATIONS TO GET DATA FROM REPO FOR FURTHER USE
  async findAll() {
    return await this.recipesRepo.find();
  }

  async findOne(id: number | string) {
    return await this.recipesRepo.findOneOrFail(id);
  }
}
