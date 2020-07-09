import { IsNotEmpty } from "class-validator";

export class ChangePasswordDto {
  id: string;

  @IsNotEmpty()
  oldPassword: string;

  @IsNotEmpty()
  newPassword: string;
}
