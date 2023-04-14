import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('pets')
@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Created successfully' })
  create(@Body() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Found successfully' })
  @ApiNotFoundResponse({ description: "User can't be find" })
  findById(@Query('_id') id: string) {
    if (id) {
      return this.petsService.findById(id);
    } else {
      return this.petsService.findAll();
    }
  }

  @Patch()
  @ApiOkResponse({ description: 'Updated successfully' })
  update(@Query('_id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petsService.update(id, updatePetDto);
  }
  @Delete()
  @ApiOkResponse({ description: 'Deleted successfully' })
  @ApiNotFoundResponse({ description: "User can't be found" })
  remove(@Query('_id') id: string) {
    return this.petsService.remove(id);
  }
}
