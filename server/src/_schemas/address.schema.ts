import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AddressDocument = Address & Document;

@Schema({ versionKey: false, timestamps: true })
export class Address {
  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  birthday: string;

  @Prop()
  groups: string;

  @Prop()
  photo: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
