import { getCustomRepository } from "typeorm";
import MateriaPrima from "../../typeorm/entities/MateriaPrima";
import MateriaPrimaRepository from "../../typeorm/repositories/MateriaPrima";
import AppError from "../../../../erros/AppError";


interface IRequest{
    name:string;
    quantity:number;
    price: number;
    tipo: string
}


class CreateMateriaPrima{
   
    public async execute({name,quantity,price,tipo}: IRequest):Promise<MateriaPrima>{
        
        const materiaprimaRepository = getCustomRepository(MateriaPrimaRepository)
        const materiaprimaExist = await materiaprimaRepository.findByName(name)

        if(materiaprimaExist){
            
            throw new AppError('Já existe um produto com este nome')
        }
        

        const novo = materiaprimaRepository.create({
            name, quantity, price, tipo
        })

        
        await materiaprimaRepository.save(novo)
        return novo
    }  
}

export default CreateMateriaPrima