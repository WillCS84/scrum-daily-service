import {
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
  IsEnum,
  IsPhoneNumber,
  IsMobilePhone,
  IsNumber,
} from 'class-validator';
import { AccessLevel } from '@prisma/client';

export class CreateCollaboratorDto {
  @IsOptional()
  @IsString()
  id_collaborator: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @IsPhoneNumber()
  @IsMobilePhone()
  phone?: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsString()
  accessToken: string;

  @IsOptional()
  @IsEnum(AccessLevel)
  accessLevel?: AccessLevel;

  @IsOptional()
  @IsNumber()
  id_departament_collaborator: number;

  @IsOptional()
  @IsNumber()
  id_profession_collaborator: number;

  @IsOptional()
  @IsNumber()
  id_accessLevel_collaborator: number;
}
