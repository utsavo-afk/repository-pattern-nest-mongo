import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  async fetchUserByID(userId: string): Promise<User> {
    return this.usersRepository.findOne({ _id: userId });
  }
  async fetchUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }
  async createUser(user: Omit<User, 'badges' | 'pokemons'>): Promise<User> {
    return this.usersRepository.create(user);
  }
  async updateUserByID(
    userId: string,
    userUpdates: UpdateUserDto,
  ): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ _id: userId }, userUpdates);
  }
  async deleteUserByID(userId: string) {
    return this.usersRepository.findOneAndDelete({ _id: userId });
  }
}
