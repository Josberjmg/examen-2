import { Module } from "@nestjs/common";
import { ProductsController} from "./product.controller";
import { ProductsService} from "./product.service";

@Module({
    providers:[ProductsService],   ///providers es para decirle al modulo que tiene unos servicios
    controllers:[ProductsController]   ///controladores 
})
export class ProductModule {}