import { Module } from '@nestjs/common';
import { AddressbooksService } from './addressbooks.service';
import { AddressbooksController } from './addressbooks.controller';

@Module({
  controllers: [AddressbooksController],
  providers: [AddressbooksService]
})
export class AddressbooksModule {}
