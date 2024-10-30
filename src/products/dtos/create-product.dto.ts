import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsObject, IsString, Min, MinLength } from "class-validator";
import { CategoryEntity } from "src/category/entities/category.entity";

export class CreateProductDto {
    
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    description: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    stock: number;
    
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    price: number;

    @IsArray()
    @IsNotEmpty() 
    photo: string[];

    @IsNotEmpty()
    @IsBoolean()
    isActive: boolean;

    @IsNotEmpty()
    @IsNumber()
    categoryId: number;
}