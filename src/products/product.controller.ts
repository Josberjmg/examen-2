import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { ProductsService } from "./product.service";
import { CreateProductDto } from "./dtos/create-product.dto";
import { UpdateProductDto } from "./dtos/update-product.dto";
import { PaginationDto } from '../common/paginationDto/pagination.dto';

@Controller('products')
export class ProductsController{
    constructor(private readonly productService: ProductsService){}

    @Post()
    create( @Body() body: CreateProductDto ){
        return this.productService.create(body);
    }

    @Get()
    findAll( @Query() paginationDto: PaginationDto ){
        return this.productService.findAll(paginationDto);
    }

    @Get(":id")
    findOne( @Param("id") id: number ){
        return this.productService.findOne(id);
    }

    @Patch(":id")
    update( 
        @Param("id") id: number,
        @Body() updateProductDto: UpdateProductDto  
    ){
        return this.productService.update(id, updateProductDto)
    }

    @Delete(":id")
    remove( @Param("id") id: number ){
        return this.productService.remove(id);
    }
}