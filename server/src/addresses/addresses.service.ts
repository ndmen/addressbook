import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressesRepository } from './addresses.repository';

@Injectable()
export class AddressesService {
  constructor(private readonly addressesRepository: AddressesRepository) {}

  async create(createAddressDto: CreateAddressDto) {
    const createOne = await this.addressesRepository.createOne(
      createAddressDto,
    );
    return createOne;
  }

  async findAll() {
    const findAll = await this.addressesRepository.findAll();
    return findAll;
  }

  async findOne(id: string) {
    const findOne = await this.addressesRepository.findOne(id);
    return findOne;
  }

  async update(id: string, updateAddressDto: UpdateAddressDto) {
    const createOne = await this.addressesRepository.updateOne(
      id,
      updateAddressDto,
    );
    return createOne;
  }

  async remove(id: string) {
    const removeOne = await this.addressesRepository.removeOne(id);
    return removeOne;
  }
}
