import { Role } from "@prisma/client";
import { IsString, IsOptional, IsEmail, IsNotEmpty } from "class-validator";


export class CreateUserDto {
  @IsString()
  User_Name: string;
  @IsString()
  Password: string;
//  @IsString()
 
//   role?: Role;

  // @IsString()
 
  // First_Name?: string;

  // @IsString()

  // Last_Name?: string;

  // @IsString()
  
  // Phone_Number: string;

  // @IsEmail()
 
  // Email?: string;

  // @IsString()
  
  // Region?: string;

  // @IsString()

  // Zone?: string;

  // @IsString()
  
  // Wereda?: string;

  // @IsString()
 
  // City?: string;

  // author_id: number;
}
