// Vamos criar um tipo de dados em TS com interface

import { getCustomRepository } from "typeorm";
import Product from "../../typeorm/entities/Product";
import ProductRepository from "../../typeorm/repositories/ProductRepository";
import AppError from "../../../../erros/AppError";


interface IRequest{
    name:string;
    quantity:number;
    price: number;
}


class CreateProductService{
    //Criação de um metodo assíncrono que executa a inserção
    //Metodo precisa prometer que ira retornar o produto
    public async execute({name,quantity,price}: IRequest):Promise<Product>{
        //Obter o repositório de Product
        const productRepository = getCustomRepository(ProductRepository)
        const productExist = await productRepository.findByName(name)

        if(productExist){
            //Criando uma excessão
            throw new AppError('Já existe um produto com este nome')
        }
        //vem aqui somente se não tem produto com o nome criado

        const novo = productRepository.create({
            name, quantity, price
        })

        //EFETIVAMENTE SLAVAMOS NO BD
        await productRepository.save(novo)
        return novo
    }  
}

export default CreateProductService