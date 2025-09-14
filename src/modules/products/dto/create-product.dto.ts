import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNumberString,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  name!: string;

  @ApiProperty({ description: 'Decimal string, e.g., 19.99' })
  @IsNumberString()
  price!: string;

  @ApiProperty({ minimum: 0 })
  @IsInt()
  @Min(0)
  stock!: number;
}
