import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AddressSchema, Address } from 'src/_schemas/address.schema';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { AddressesRepository } from './addresses.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Address.name, schema: AddressSchema }]),
  ],
  controllers: [AddressesController],
  providers: [AddressesService, AddressesRepository],
})
export class AddressesModule {}
