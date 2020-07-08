import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
} from "typeorm";

export enum GenderEnum {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
  NOT_SPECIFIED = "",
}

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true, type: "varchar", length: 50 })
  name: string;

  @Column({ nullable: true, type: "varchar", length: 75 })
  surname: string;

  @Column({ nullable: true, type: "varchar", length: 500 })
  bio: string;

  @Column({
    type: "enum",
    enum: GenderEnum,
    default: GenderEnum.NOT_SPECIFIED,
  })
  gender: GenderEnum;
}
