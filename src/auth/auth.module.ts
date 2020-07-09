import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsersModule } from "src/users/users.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.stragety";
import { JwtModule } from "@nestjs/jwt";

import { jwtConstants } from "../code/constants";
import { JwtStrategy } from "./jwt.stragety";
import { CryptoService } from "src/crypto/crypto.service";

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      // TOOD add signOptions
      // signOptions: { expiresIn: "10m" },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, CryptoService],
  exports: [AuthService],
})
export class AuthModule {}
