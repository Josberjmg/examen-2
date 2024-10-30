import { CategoryEntity } from "src/category/entities/category.entity"
import { ProductEntity } from "../entities/product.entity"

export class ResponseAllProducts{
    
    page: number
    limit: number
    lastPage: number
    total: number
    data:ProductEntity[]
    category: CategoryEntity[]
}