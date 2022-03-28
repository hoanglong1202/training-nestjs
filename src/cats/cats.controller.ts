import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatsDTO } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Post()
  create(@Body() createCatsDTO: CreateCatsDTO) {
    this.catsService.create(createCatsDTO);
    return 'Create Cat succesful';
  }

  @Put(':id')
  update(@Body() createCatsDTO: CreateCatsDTO, @Param() params) {
    this.catsService.update(createCatsDTO, params.id);
    return 'Update Cat succesful';
  }

  @Delete(':id')
  remove(@Param() params) {
    this.catsService.delete(params.id);
    return 'Delete Cat succesful';
  }
}
