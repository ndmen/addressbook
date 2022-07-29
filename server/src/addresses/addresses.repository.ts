import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddressDo } from 'src/_schemas/address.do';

export class AddressesRepository {
  constructor(
    @InjectModel('Address')
    private addressModel: Model<AddressDo>,
  ) {}

  async createOne(address): Promise<any> {
    const createAddress = await this.addressModel.create(address);
    return createAddress;
  }

  async findAll(): Promise<any> {
    const findAllAddresses = await this.addressModel.find();
    return findAllAddresses;
  }

  async findOne(id): Promise<any> {
    const findAddress = await this.addressModel.findById(id);
    return findAddress;
  }

  async updateOne(id, address): Promise<any> {
    const updateAddress = await this.addressModel.findByIdAndUpdate(
      id,
      address,
    );
    return updateAddress;
  }

  async removeOne(id): Promise<any> {
    const deleteAddress = await this.addressModel.findByIdAndDelete(id);
    return deleteAddress;
  }
}
