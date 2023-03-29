import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  hometown: string;

  @IsNumber()
  age: number;
}
