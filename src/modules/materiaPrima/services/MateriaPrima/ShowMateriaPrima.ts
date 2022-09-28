import { getCustomRepository } from "typeorm";
import MateriaPrima from "../../typeorm/entities/MateriaPrima";
import MateriaPrimaRepository from "../../typeorm/repositories/MateriaPrima";
import AppError from "../../../../erros/AppError";


interface IRequest{
    id:string
}
class ShowMateriaPrima{
    public async execute({id}: IRequest): Promise<MateriaPrima>{
    let materiaPrimaRepository  =  getCustomRepository(MateriaPrimaRepository)
    let product = await materiaPrimaRepository.findOne(id)
    if(!product){
        throw new AppError('Produto não existe')
    }
    return product
    }
}

export default ShowMateriaPrima;