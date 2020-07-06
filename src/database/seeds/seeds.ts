import { Connection, ObjectType, FindOneOptions } from "typeorm";
import { Recipe } from "../entities/Recipe.entity";

const defaultRecipes = [
  {
    id: 1,
    createdAt: new Date(),
    name: "Seed recipe 1",
    description: "Lorem ipsum dorem",
  },
  {
    id: 2,
    createdAt: new Date(),
    name: "Seed recipe 2",
    description: "Lorem ipsum dorem",
  },
  {
    id: 3,
    createdAt: new Date(),
    name: "Seed recipe 3",
    description: "Lorem ipsum dorem",
  },
  {
    id: 4,
    createdAt: new Date(),
    name: "Seed recipe 4",
    description: "Lorem ipsum dorem",
  },
  {
    id: 5,
    createdAt: new Date(),
    name: "Seed recipe 5",
    description: "Lorem ipsum dorem",
  },
];

const seeder = async <Entity>(
  connection: Connection,
  entity: ObjectType<Entity>,
  findOneOptions: FindOneOptions<Entity>,
  newEntity: Entity
) => {
  const repo = connection.getRepository(entity);
  const inDb = await repo.findOne(findOneOptions);
  repo.save({ ...inDb, ...newEntity });
};

const seeds = [
  {
    entity: Recipe,
    data: defaultRecipes,
    findOneOptions: (recipe) => ({ where: { name: recipe.name } }),
  },
];

export const startSeeding = async (connection: Connection) => {
  for (const seed of seeds) {
    for (const entity of seed.data) {
      try {
        await seeder(
          connection,
          seed.entity,
          seed.findOneOptions(entity),
          entity
        );
      } catch (error) {
        console.error(`Seeding error: ${error}.`);
      }
    }
  }
};
