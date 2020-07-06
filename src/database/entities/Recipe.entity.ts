import { Entity, PrimaryColumn, CreateDateColumn, Column } from "typeorm";

@Entity()
export class Recipe {
  @PrimaryColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  name: string;

  @Column()
  description: string;
}