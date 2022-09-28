import { getCustomRepository } from "typeorm"
import AppError from "../../../../erros/AppError"
import Product from "../../typeorm/entities/Product"
import ProductRepository from "../../typeorm/repositories/ProductRepository"

//Cria um tipo de dado
interface IRequest {
    id: string,
    name: string,
    price: number,
    quantity: number
}

class UpdateProductService{
    public async execute({id,name,price,quantity}: IRequest):Promise<Product>{
        const productRepository = getCustomRepository(ProductRepository)
        const productExist = await productRepository.findOne(id)
        if(!productExist){
            throw new AppError('Produto não existe', 400)
        }
        //Verifica se o nome alterado já existe no BD
        const nameExist = await productRepository.findByName(name)
        if(nameExist){
            throw new AppError('Nome do Produto já existe',400)
        }

        productExist.name = name
        productExist.price = price
        productExist.quantity = quantity
        await productRepository.save(productExist) // O save busca no 
        return productExist
    }
}

export default UpdateProductService