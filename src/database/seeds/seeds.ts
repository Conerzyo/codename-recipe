import { Connection, ObjectType, FindOneOptions } from 'typeorm';
import { Recipe } from '../entities/Recipe.entity';

const defaultRecipes = [
  {
    // id: '1',
    createdAt: new Date(),
    name: 'Seed recipe 1',
    description: 'Lorem ipsum dorem',
    servings: 4,
    steps: [
      {
        nth: 1,
        text: 'Step step, steppity step, I am cooking this mhmmm',
        time: 3600,
      },
      {
        nth: 2,
        text: 'Step step, steppity step, I am cooking this mhmmm',
        time: 3600,
      },
      {
        nth: 3,
        text: 'Step step, steppity step, I am cooking this mhmmm',
        time: 3600,
      },
      {
        nth: 4,
        text: 'Step step, steppity step, I am cooking this mhmmm',
        time: 3600,
      },
    ],
    ingredients: [
      {
        name: 'Carrot',
        quantity: '2',
        measurement: 'pieces',
      },
      {
        name: 'water',
        quantity: '300',
        measurement: 'mililiters',
      },
    ],
  },
  {
    // id: '2',
    createdAt: new Date(),
    name: 'Seed recipe 2',
    description: 'Lorem ipsum dorem',
    servings: 4,
    steps: [
      {
        nth: 1,
        text: 'Step step, steppity step, I am cooking this mhmmm',
        time: 3600,
      },
      {
        nth: 2,
        text: 'Step step, steppity step, I am cooking this mhmmm',
        time: 3600,
      },
      {
        nth: 3,
        text: 'Step step, steppity step, I am cooking this mhmmm',
        time: 3600,
      },
      {
        nth: 4,
        text: 'Step step, steppity step, I am cooking this mhmmm',
        time: 3600,
      },
    ],
    ingredients: [
      {
        name: 'Carrot',
        quantity: '2',
        measurement: 'pieces',
      },
      {
        name: 'water',
        quantity: '300',
        measurement: 'mililiters',
      },
    ],
  },
  {
    // id: '3',
    createdAt: new Date(),
    name: 'Seed recipe 3',
    description: 'Lorem ipsum dorem',
    servings: 4,
    steps: [
      {
        nth: 1,
        text: 'Step step, steppity step, I am cooking this mhmmm',
        time: 3600,
      },
      {
        nth: 2,
        text: 'Step step, steppity step, I am cooking this mhmmm',
        time: 3600,
      },
      {
        nth: 3,
        text: 'Step step, steppity step, I am cooking this mhmmm',
        time: 3600,
      },
      {
        nth: 4,
        text: 'Step step, steppity step, I am cooking this mhmmm',
        time: 3600,
      },
    ],
    ingredients: [
      {
        name: 'Carrot',
        quantity: '2',
        measurement: 'pieces',
      },
      {
        name: 'water',
        quantity: '300',
        measurement: 'mililiters',
      },
    ],
  },
  {
    // id: '4',
    createdAt: new Date(),
    name: 'Seed recipe 4',
    description: 'Lorem ipsum dorem',
    servings: 4,
    steps: [
      {
        nth: 1,
        text: 'Step step, steppity step, I am cooking this mhmmm',
        time: 3600,
      },
      {
        nth: 2,
        text: 'Step step, steppity step, I am cooking this mhmmm',
        time: 3600,
      },
      {
        nth: 3,
        text: 'Step step, steppity step, I am cooking this mhmmm',
        time: 3600,
      },
      {
        nth: 4,
        text: 'Step step, steppity step, I am cooking this mhmmm',
        time: 3600,
      },
    ],
    ingredients: [
      {
        name: 'Carrot',
        quantity: '2',
        measurement: 'pieces',
      },
      {
        name: 'water',
        quantity: '300',
        measurement: 'mililiters',
      },
    ],
  },
  {
    // id: '5',
    createdAt: new Date(),
    name: 'Seed recipe 5',
    description: 'Lorem ipsum dorem',
    servings: 4,
    steps: [
      {
        nth: 1,
        text: 'Step step, steppity step, I am cooking this mhmmm',
        time: 3600,
      },
      {
        nth: 2,
        text: 'Step step, steppity step, I am cooking this mhmmm',
        time: 3600,
      },
      {
        nth: 3,
        text: 'Step step, steppity step, I am cooking this mhmmm',
        time: 3600,
      },
      {
        nth: 4,
        text: 'Step step, steppity step, I am cooking this mhmmm',
        time: 3600,
      },
    ],
    ingredients: [
      {
        name: 'Carrot',
        quantity: '2',
        measurement: 'pieces',
      },
      {
        name: 'water',
        quantity: '300',
        measurement: 'mililiters',
      },
    ],
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
        const stringifiedEntity = {
          ...entity,
          steps: JSON.stringify(entity.steps),
          ingredients: JSON.stringify(entity.ingredients),
        };
        await seeder(
          connection,
          seed.entity,
          seed.findOneOptions(entity),
          stringifiedEntity
        );
      } catch (error) {
        console.error(`Seeding error: ${error}.`);
      }
    }
  }
};
