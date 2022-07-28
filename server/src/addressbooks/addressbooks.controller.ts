import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressbooksService } from './addressbooks.service';
import { CreateAddressbookDto } from './dto/create-addressbook.dto';
import { UpdateAddressbookDto } from './dto/update-addressbook.dto';

@Controller('addressbooks')
export class AddressbooksController {
  constructor(private readonly addressbooksService: AddressbooksService) {}

  @Post()
  create(@Body() createAddressbookDto: CreateAddressbookDto) {
    return this.addressbooksService.create(createAddressbookDto);
  }

  @Get()
  findAll() {
    return this.addressbooksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressbooksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddressbookDto: UpdateAddressbookDto) {
    return this.addressbooksService.update(+id, updateAddressbookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressbooksService.remove(+id);
  }
}
