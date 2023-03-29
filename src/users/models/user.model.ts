import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({})
export class User {
  @Prop()
  name: string;

  @Prop()
  hometown: string;

  @Prop()
  age: number;

  @Prop({ default: null, type: [String] })
  badges: string[];

  @Prop({ default: null, type: [String] })
  pokemons: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
