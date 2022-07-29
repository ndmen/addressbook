import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createAddressDto: CreateAddressDto) {
    return await this.addressesService.create(createAddressDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.addressesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.addressesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    return await this.addressesService.update(id, updateAddressDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.addressesService.remove(id);
  }
}
