import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoryService {
  public category: CategoryEntity[]=[
    {id: 1,name: 'bebida', description: 'si', isActive: true},
    {id: 6,name: 'bebida mala', description: 'panaron mi pana', isActive: true},
    {id: 5,name: 'bebida buena', description: 'blue label', isActive: true},
  ]
  create(body: CreateCategoryDto){
    try {
        if( !body ){
            throw new BadRequestException("category not create!")
        }
        this.category.push( { ...body, id: this.category.length+1 }
        )

    } catch (error) {
        throw new InternalServerErrorException("I don't know what's happening bro...")
    }
}
  findAll() {
    return this.category;
  } 

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
