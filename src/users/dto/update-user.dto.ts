import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  hometown: string;

  @IsOptional()
  @IsNumber()
  age: number;

  @IsOptional()
  @IsArray()
  badges: string[];

  @IsOptional()
  @IsArray()
  pokemons: string[];
}
