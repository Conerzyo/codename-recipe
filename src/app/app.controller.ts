import {
  Controller,
  Get,
  UseGuards,
  Post,
  Request,
  Body,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { LocalAuthGuard } from "src/auth/local-auth.guard";
import { AuthService } from "src/auth/auth.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { UsersService } from "src/users/users.service";
import { ChangePasswordDto } from "src/users/dto/ChangePasswordDto";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Post("auth/changePassword")
  async changePassword(@Body() changePassworDto: ChangePasswordDto) {
    return this.usersService.changePassword(
      changePassworDto.id,
      changePassworDto.oldPassword,
      changePassworDto.newPassword
    );
  }
}
