import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { User, UserDocument } from './models/user.model';

@Injectable({})
export class UsersRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}
  async findOne(userFilterQuery: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(userFilterQuery);
  }
  async find(usersFilterQuery: FilterQuery<User>): Promise<User[]> {
    return this.userModel.find(usersFilterQuery);
  }
  async create(_user: Omit<User, 'pokemons' | 'badges'>): Promise<User> {
    const user = new this.userModel(_user);
    return user.save();
  }
  async findOneAndUpdate(
    userFilterQuery: FilterQuery<User>,
    updateData: Partial<User>,
  ): Promise<User> {
    return this.userModel.findOneAndUpdate(userFilterQuery, updateData, {
      new: true,
    });
  }
  async findOneAndDelete(userFilterQuery: FilterQuery<User>): Promise<User> {
    return this.userModel.findOneAndDelete(userFilterQuery);
  }
}
