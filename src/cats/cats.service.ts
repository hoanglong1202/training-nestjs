import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';
import { Model } from 'mongoose';
import { CreateCatsDTO } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}
  private readonly cats: Cat[] = [];

  async create(createCatDto: CreateCatsDTO): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find();
  }

  update(cat: Cat, id: number) {
    this.cats[id] = cat;
  }

  delete(id: number) {
    this.cats.splice(id, 1);
  }
}
