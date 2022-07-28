import { Types } from 'mongoose';

export class AddressDo {
  _id: Types.ObjectId;
  name: string;
  phone: string;
  birthday: string;
  groups: string;
  photo: string;

  constructor(props: Partial<AddressDo>) {
    this._id = props._id;
    this.name = props.name || null;
    this.phone = props.phone || null;
    this.birthday = props.birthday || null;
    this.groups = props.groups || null;
    this.photo = props.photo || null;
  }
}
