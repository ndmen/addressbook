import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDo } from 'src/_schemas/user.do';

export class UsersRepository {
  constructor(
    @InjectModel('User')
    private userModel: Model<UserDo>,
  ) {}

  async findOne(email): Promise<any> {
    const findOne = await this.userModel.findOne({ email: email });
    return findOne;
  }

  async findOneById(id): Promise<any> {
    const findOneById = await this.userModel.findById(id);
    return {
      _id: findOneById._id,
      email: findOneById.email,
    };
  }

  async createOne(user): Promise<any> {
    const createOne = await this.userModel.create(user);
    return createOne;
  }
}
