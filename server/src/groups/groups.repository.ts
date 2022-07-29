import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GroupDo } from 'src/_schemas/group.do';

export class GroupsRepository {
  constructor(
    @InjectModel('Group')
    private groupModel: Model<GroupDo>,
  ) {}

  async create(group): Promise<any> {
    const createOne = await this.groupModel.create(group);
    return createOne;
  }
}
