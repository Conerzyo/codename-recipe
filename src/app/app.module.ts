import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppService } from "./app.service";
import { Recipe } from "../database/entities/Recipe.entity";
import { startSeeding } from "../database/seeds/seeds";
import { Connection } from "typeorm";
import { RecipesModule } from "../recipes/recipes.module";
import { User } from "src/database/entities/User.entity";
import { AppController } from "./app.controller";
import { AuthService } from "src/auth/auth.service";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import { AuthModule } from "src/auth/auth.module";
import { UsersModule } from "src/users/users.module";

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
  imports: [typeormModule, RecipesModule, AuthModule],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {
  constructor(connection: Connection) {
    startSeeding(connection);
  }
}
