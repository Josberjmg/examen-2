import { Injectable, InternalServerErrorException, NotFoundException, Body, BadRequestException, Query, Param, Patch } from '@nestjs/common';
import { CreateProductDto } from "./dtos/create-product.dto";
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductEntity} from "./entities/product.entity";
import { PaginationDto } from '../common/paginationDto/pagination.dto';
import { ResponseAllProducts } from './interfaces/interface.products';
import { ManagerError } from 'src/common/errors/manage.errors';

import { CategoryService } from '../category/category.service';
import { CategoryEntity } from 'src/category/entities/category.entity';

@Injectable()
export class ProductsService{
    private products: ProductEntity[] = [
        { id: 0, name: "Anis", description: "fivestars", stock: 789, price: 20, photo: ["photo.jpg"], isActive: true , categoryId: 1 },
        { id: 1, name: "Vodka", description: "maj o menoj manito", stock:89, price: 22, photo: ["photo.jpg"], isActive: true , categoryId: 1 },
        { id: 2, name: "Ron", description: "Asco",stock: 123, price: 30, photo: ["photo.jpg"], isActive: true , categoryId: 1 },
        { id: 3, name: "Champagne", description: "sabroso",stock: 129, price: 21, photo: ["photo.jpg"], isActive: true , categoryId: 1 },
        { id: 4, name: "Blue label", description: "bebida espirituosa", stock: 19, price: 410, photo: ["photo.jpg"], isActive: true , categoryId: 1 },
    ]
    constructor(
        private readonly categoryService: CategoryService
    ) {}

    create(body: CreateProductDto){
        try {
            if( !body ){
                throw new BadRequestException("Product not create!")
            }
            this.products.push( { ...body, id: this.products.length+1 }
            )

        } catch (error) {
            throw new InternalServerErrorException("I don't know what's happening bro...")
        }
    }

    async findAll(paginationDto: PaginationDto): Promise<ResponseAllProducts> {
        try {
            if(this.products.length===0){
                throw new ManagerError({
                    type: "NOT_FOUND",
                    message: "Product Not Found"
                })
            }

            const {page, limit} = paginationDto;
            const total= this.products.filter((products)=>products.isActive===true).length;
            const skip = (page - 1) * limit;
            const lastPage = Math.ceil( total/limit);
            const data = this.products.slice(skip, limit);
            const category = this.categoryService.findAll()

        return {
            page,
            limit,
            total,
            lastPage,
            data,
            category
        }
        } catch (error) {
            ManagerError.createSignatureError( error.message )
        }
    }

    findOne(id: number, categoryId: number){
        this.categoryService.findOne(categoryId)
        return {id, categoryId}
    }

    update(id: number, updateProductDto: UpdateProductDto){
        return {id, updateProductDto}
    }

    remove(id: number){
        return {id}
    }
}