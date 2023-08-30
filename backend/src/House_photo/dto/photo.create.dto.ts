import { IsNotEmpty, IsString } from "class-validator";

export class CreatePhoto{
@IsString()
@IsNotEmpty()
Toilet:string;

@IsString()
@IsNotEmpty()
Kitchen:string;

@IsString()
@IsNotEmpty()
Shower:string;

@IsString()
@IsNotEmpty()
Door:string;

@IsString()
@IsNotEmpty()
Floor:string;

@IsString()
@IsNotEmpty()
Roof:string;

@IsString()
@IsNotEmpty()
Wall:string;

@IsString()
@IsNotEmpty()
Home_license:string;
}