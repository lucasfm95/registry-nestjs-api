import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = CustomerData & Document;

@Schema()
export default class CustomerData {
  @Prop({ required: true, type: String })
  public documentNumber: string;
  @Prop({ required: true, type: String })
  public name: string;
  @Prop({ required: true, type: Boolean })
  public enabled: boolean;
  @Prop({ type: Date })
  public createdAt: Date;
  @Prop({ type: Date })
  public updatedAt: Date;
}

export const CustomerSchema = SchemaFactory.createForClass(CustomerData);
