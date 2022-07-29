import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAddressDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  birthday: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  groups: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  photo: string;
}
