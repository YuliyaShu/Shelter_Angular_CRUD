import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PetDocument, Pet } from '../schemas/pet.schema';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetsService {
  constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>) {}

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    return await new this.petModel(createPetDto).save();
  }

  async findAll(): Promise<Pet[]> {
    return await this.petModel.find().exec();
  }

  async findById(id: string): Promise<Pet> {
    return await this.petModel.findById(id);
  }

  async update(id: string, updatePetDto: UpdatePetDto) {
    return await this.petModel.updateOne(
      { _id: id },
      { $set: { ...updatePetDto } },
    );
  }

  async remove(id: string) {
    return await this.petModel.deleteOne({ _id: id });
  }
}
