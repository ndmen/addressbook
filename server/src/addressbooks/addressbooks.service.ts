import { Injectable } from '@nestjs/common';
import { CreateAddressbookDto } from './dto/create-addressbook.dto';
import { UpdateAddressbookDto } from './dto/update-addressbook.dto';

@Injectable()
export class AddressbooksService {
  create(createAddressbookDto: CreateAddressbookDto) {
    return 'This action adds a new addressbook';
  }

  findAll() {
    return `This action returns all addressbooks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} addressbook`;
  }

  update(id: number, updateAddressbookDto: UpdateAddressbookDto) {
    return `This action updates a #${id} addressbook`;
  }

  remove(id: number) {
    return `This action removes a #${id} addressbook`;
  }
}
