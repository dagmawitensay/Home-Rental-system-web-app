import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateHouseDto{
    @IsString()
    @IsOptional()
    Home_Type?:string;
    @IsBoolean()
    @IsOptional()
    
Approval_status?: boolean | null;
@IsString()
@IsOptional()
 Size?:string;
 @IsOptional()

Price?:string ;
@IsString()
@IsOptional()
City?:string;

@IsString()
@IsOptional()
Sub_City?:string;
@IsString()
@IsOptional()
Wereda?:string;
@IsString()

@IsOptional()
Kebele?:string;

@IsOptional()
home_no?:string;
}