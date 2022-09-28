import { getCustomRepository } from "typeorm"
import AppError from "../../../../erros/AppError"
import MateriaPrima from "../../typeorm/entities/MateriaPrima"
import MateriaPrimaRepository from "../../typeorm/repositories/MateriaPrima"


interface IRequest {
    id: string,
    name: string,
    price: number,
    quantity: number
    tipo: string
}

class UpdateMateriaPrima{
    public async execute({id,name,price,quantity,tipo}: IRequest):Promise<MateriaPrima>{
        const materiaprimaRepository = getCustomRepository(MateriaPrimaRepository)
        const productExist = await materiaprimaRepository.findOne(id)
        if(!productExist){
            throw new AppError('Produto não existe', 400)
        }
        
        const nameExist = await materiaprimaRepository.findByName(name)
        if(nameExist){
            throw new AppError('Nome do Produto já existe',400)
        }

        productExist.name = name
        productExist.price = price
        productExist.quantity = quantity
        productExist.tipo = tipo
        await materiaprimaRepository.save(productExist) 
        return productExist
    }
}

export default UpdateMateriaPrima