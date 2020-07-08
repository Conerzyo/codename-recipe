import { IsEmail, IsNotEmpty } from "class-validator";
import { GenderEnum } from "src/database/entities/User.entity";

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
  
  name: string;
  surname: string;
  bio: string;
  gender: GenderEnum;
}
