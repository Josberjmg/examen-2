import { Module } from '@nestjs/common';
import { ProductModule } from './products/product.module';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.development`,
      isGlobal: true,
    }), 
    ProductModule, CategoryModule
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
