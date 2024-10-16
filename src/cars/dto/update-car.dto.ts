import { IsOptional, IsString } from 'class-validator';

export class UpdateCarDto {
  //   @IsString()
  //   @IsUUID()
  //   @IsOptional()
  //   readonly id: string;
  @IsString()
  @IsOptional()
  readonly model: string;
  @IsString()
  @IsOptional()
  readonly brand: string;
}
