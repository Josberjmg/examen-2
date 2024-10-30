import { CategoryEntity } from "src/category/entities/category.entity";


export class ProductEntity {
    id: number;
    name: string;
    description: string;
    stock: number;
    price: number;
    photo: string[];
    isActive: boolean;
    categoryId: number;
}