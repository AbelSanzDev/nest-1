import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;
  @IsString()
  @MinLength(3, { message: 'The model must have more than 3 characters' })
  readonly model: string;
}
