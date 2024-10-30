import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    name:string

    @IsNotEmpty()
    @IsString()
    description:string
    
    @IsBoolean()
    @IsNotEmpty()
    isActive: boolean
}
