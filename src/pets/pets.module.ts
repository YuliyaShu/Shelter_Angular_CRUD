import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet, PetSchema } from 'src/schemas/pet.schema.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pet.name,
        schema: PetSchema,
      },
    ]),
  ],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
