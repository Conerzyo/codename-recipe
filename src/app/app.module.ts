import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppService } from "./app.service";
import { Recipe } from "../database/entities/Recipe.entity";
import { startSeeding } from "../database/seeds/seeds";
import { Connection } from "typeorm";
import { RecipesModule } from "../recipes/recipes.module";
import { User } from "src/database/entities/User.entity";

const typeormModule = TypeOrmModule.forRoot({
  type: "postgres",
  port: 5432,
  entities: [Recipe, User],
  synchronize: true,
  url: process.env.DB_URL,
  autoLoadEntities: true,
  cache: true,
});
@Module({
  imports: [typeormModule, RecipesModule],
  providers: [AppService],
})
export class AppModule {
  constructor(connection: Connection) {
    startSeeding(connection);
  }
}
