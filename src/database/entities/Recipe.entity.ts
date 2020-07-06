import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
} from "typeorm";
@Entity()
export class Recipe {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  servings: number;

  @Column({ nullable: true })
  steps: string;

  @Column({ nullable: true })
  ingredients: string;
}
