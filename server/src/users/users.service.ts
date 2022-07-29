import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findOne(email): Promise<any> {
    return this.usersRepository.findOne(email);
  }

  async findOneById(id: string): Promise<any> {
    return this.usersRepository.findOneById(id);
  }

  async createOne(user): Promise<any> {
    const createOne = await this.usersRepository.createOne(user);
    return createOne;
  }
}
