export class CreatePetDto {
  name: string;
  animalType: string;
  breed: string;
  description: string;
  age: string;
  inoculations?: string;
  diseases?: string;
  parasites?: string;
}
