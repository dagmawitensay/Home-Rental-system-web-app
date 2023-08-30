import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateHouseDto{
    
    @IsOptional()
    Home_Photo:any;
    @IsString()
    @IsNotEmpty()
    Home_Type:string;
    @IsBoolean()
    @IsOptional()
    
Approval_status?:boolean;
@IsString()
@IsNotEmpty()
 Size:string;

 @IsString()
@IsNotEmpty()
Price:string ;
@IsString()
@IsNotEmpty()
City:string;
@IsString()
@IsNotEmpty()
Sub_City:string;
@IsString()
@IsNotEmpty()
Wereda:string;
@IsString()
@IsNotEmpty()
Kebele:string;

@IsString()
@IsNotEmpty()
home_no:string;
}