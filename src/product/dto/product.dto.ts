import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  IsOptional,
} from 'class-validator';

export class ProductDto {
  @IsOptional()
  id: number;

  @IsOptional()
  @IsNotEmpty({ groups: ['create'] })
  @IsString()
  name: string;

  @IsOptional()
  @IsNotEmpty({ groups: ['create'] })
  @IsNumberString()
  price: number;

  @IsOptional()
  @IsNotEmpty({ groups: ['create'] })
  @IsString()
  description: string;

  @IsOptional()
  @IsNotEmpty({ groups: ['create'] })
  @IsNumber()
  userId: number;
}
