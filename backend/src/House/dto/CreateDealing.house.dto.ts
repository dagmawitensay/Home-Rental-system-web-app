import { IsBoolean, IsOptional } from "class-validator";

export class CreateDealingHouseDto {
  @IsBoolean()
  @IsOptional()
  Is_deal?: boolean;
  @IsBoolean()
  @IsOptional()
  Is_report?: boolean;
  @IsBoolean()
  @IsOptional()
  Is_Like?: boolean;
}
