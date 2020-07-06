import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Recipe } from "./database/entities/Recipe.entity";
import { startSeeding } from "./database/seeds/seeds";
import { Connection } from "typeorm";

const typeormModule = TypeOrmModule.forRoot({
  type: "postgres",
  port: 5432,
  entities: [Recipe],
  synchronize: true,
  url: process.env.DB_URL,
  autoLoadEntities: true,
  cache: true,
});
@Module({
  imports: [typeormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(connection: Connection) {
    startSeeding(connection);
  }
}
