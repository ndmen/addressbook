import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';

@Injectable()
export class GroupsService {
  create(createGroupDto: CreateGroupDto) {
    return 'This action adds a new group';
  }
}
