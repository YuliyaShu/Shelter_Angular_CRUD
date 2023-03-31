import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PetDocument = HydratedDocument<Pet>;

@Schema()
export class Pet {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  animalType: string;

  @Prop({ required: true })
  breed: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  age: string;

  @Prop()
  inoculations?: string;

  @Prop()
  diseases?: string;

  @Prop()
  parasites?: string;

  _id: { type: string };
}

export const PetSchema = SchemaFactory.createForClass(Pet);
