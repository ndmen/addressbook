import { Types } from 'mongoose';

export class GroupDo {
  _id: Types.ObjectId;
  name: string;

  constructor(props: Partial<GroupDo>) {
    this._id = props._id;
    this.name = props.name || null;
  }
}
