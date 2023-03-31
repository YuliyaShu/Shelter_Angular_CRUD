import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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

interface DeleteResponse {
  acknowledged: boolean;
  deletedCount: number;
}

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
  findAll() {
    return this.petsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Found successfully' })
  @ApiNotFoundResponse({ description: "User can't be find" })
  findById(@Param('id') id: string) {
    return this.petsService.findById(id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Updated successfully' })
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petsService.update(id, updatePetDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Deleted successfully' })
  @ApiNotFoundResponse({ description: "User can't be found" })
  remove(@Param('id') id: string) {
    return this.petsService.remove(id);
  }
}
