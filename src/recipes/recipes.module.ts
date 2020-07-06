import { Module } from "@nestjs/common";
import { RecipesService } from "./recipes.service";
import { RecipesController } from "./recipes.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Recipe } from "src/database/entities/Recipe.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Recipe])],
  providers: [RecipesService],
  controllers: [RecipesController],
  exports: [RecipesService],
})
export class RecipesModule {}
