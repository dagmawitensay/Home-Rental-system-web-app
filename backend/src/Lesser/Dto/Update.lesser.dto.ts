import { IsEmail, IsOptional, IsString } from "class-validator";

export class UpdateLeesserDto {
  @IsString()
  @IsOptional()
  First_Name?: string;

  @IsString()
  @IsOptional()
  Last_Name?: string;

  @IsString()
  @IsOptional()
  Phone_Number?: string;

  @IsEmail()
  @IsOptional()
  Email?: string;

  @IsEmail()
  @IsOptional()
  Region?: string;

  @IsEmail()
  @IsOptional()
  Zone?: string;

  @IsEmail()
  @IsOptional()
  Wereda?: string;

  @IsString()
  @IsOptional()
  City?: string;
}
