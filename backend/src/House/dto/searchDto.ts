import { IsOptional, IsString } from "class-validator";

export class searchDto {
  @IsOptional()
  location?: string;
  @IsOptional()
  @IsString()
  Home_Type?: string;
  @IsOptional()
  min_price?: number;
  @IsOptional()
  max_price?: number;
}
