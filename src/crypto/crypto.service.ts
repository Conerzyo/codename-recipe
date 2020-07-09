import { Injectable } from "@nestjs/common";
import { randomBytes, pbkdf2Sync } from "crypto";

@Injectable()
export class CryptoService {
  hashPassword(password: string) {
    const salt = randomBytes(16).toString("hex");
    const hash = pbkdf2Sync(password, salt, 2048, 32, "sha512").toString("hex");
    return [salt, hash].join("$");
  }

  verifyHash(password: string, hashedPassword: string) {
    const originalHash = hashedPassword.split("$")[1];
    const salt = hashedPassword.split("$")[0];
    const hash = pbkdf2Sync(password, salt, 2048, 32, "sha512").toString("hex");

    return hash === originalHash;
  }
}
