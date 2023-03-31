import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePetDto {
  @ApiProperty({
    type: String,
  })
  name: string;

  @ApiProperty({
    type: String,
  })
  animalType: string;

  @ApiProperty({
    type: String,
  })
  breed: string;

  @ApiProperty({
    type: String,
  })
  description: string;

  @ApiProperty({
    type: String,
  })
  age: string;

  @ApiPropertyOptional({
    type: String,
  })
  inoculations?: string;

  @ApiPropertyOptional({
    type: String,
  })
  diseases?: string;

  @ApiPropertyOptional({
    type: String,
  })
  parasites?: string;
}
