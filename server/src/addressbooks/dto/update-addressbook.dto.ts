import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressbookDto } from './create-addressbook.dto';

export class UpdateAddressbookDto extends PartialType(CreateAddressbookDto) {}
