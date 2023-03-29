import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PetDocument, Pet } from 'src/schemas/pet.schema';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetsService {
  constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>) {}

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    return new this.petModel(createPetDto).save();
  }

  async findAll(): Promise<Pet[]> {
    return this.petModel.find().exec();
  }

  async findOne(_id: number) {
    return this.petModel.findOne({ _id });
  }

  async update(_id: number, updatePetDto: UpdatePetDto) {
    return this.petModel.updateOne({ _id }, { $set: { ...updatePetDto } });
  }

  async remove(_id: number) {
    return this.petModel.deleteOne({ _id });
  }
}
