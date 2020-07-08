import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/database/entities/User.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  // OPERATIONS TO GET DATA FROM REPO FOR FURTHER USE
  async findAll() {
    return await this.usersRepo.find();
  }

  async findOne(email: string) {
    return await this.usersRepo.findOneOrFail({ email });
  }
}
