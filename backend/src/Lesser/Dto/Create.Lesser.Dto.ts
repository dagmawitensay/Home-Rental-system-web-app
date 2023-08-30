import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateLesserDto {
    @IsString()
    @IsNotEmpty()
    First_Name:string;

    @IsString()
    @IsNotEmpty()
    Last_Name:string;

    @IsString()
    @IsNotEmpty()
    Phone_Number:string;

    @IsEmail()
    @IsNotEmpty()
    Email:string ;

    @IsString()
    @IsNotEmpty()
    Region:string ;

    @IsString()
    @IsNotEmpty()
    Zone:string ;

    @IsString()
    @IsNotEmpty()
    Wereda:string;

    @IsString()
    @IsOptional()
    City:string;
}