import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDTO {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @IsPhoneNumber()
  @IsMobilePhone()
  @IsOptional()
  phone: string;
}
