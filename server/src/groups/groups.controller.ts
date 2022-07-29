import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createGroupDto: CreateGroupDto) {
    return await this.groupsService.create(createGroupDto);
  }
}
