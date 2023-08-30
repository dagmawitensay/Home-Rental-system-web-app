import { IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateLesseDto{
  @IsString()
  First_Name:string;
  @IsString()
   Last_Name:string;
   @IsString()
   Phone_Number:string;
   @IsString()
   Email:string;

}