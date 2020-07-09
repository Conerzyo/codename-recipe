import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/database/entities/User.entity";
import { Repository } from "typeorm";
import { AuthService } from "src/auth/auth.service";
import { CryptoService } from "src/crypto/crypto.service";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepo: Repository<User>,
    private cryptoService: CryptoService
  ) {}

  async changePassword(
    userId: string,
    oldPassword: string,
    newPassword: string
  ) {
    const user = await this.findOneById(userId);

    // TODO
    const currentPasswordHash = this.cryptoService.hashPassword(user.password);
    const oldPasswordHash = this.cryptoService.hashPassword(oldPassword);
    const newPasswordHash = this.cryptoService.hashPassword(newPassword);

    return this.usersRepo.save({ ...user, password: newPasswordHash });
  }

  // OPERATIONS TO GET DATA FROM REPO FOR FURTHER USE
  async findAll() {
    return await this.usersRepo.find();
  }

  async findOne(email: string) {
    return await this.usersRepo.findOneOrFail({ email });
  }

  async findOneById(id: string) {
    return await this.usersRepo.findOneOrFail(id);
  }
}
