import { getCustomRepository } from "typeorm";
import Cliente from "../../typeorm/entities/Cliente";
import ClienteRepository from "../../typeorm/repositories/ClienteRepository";
import AppError from "../../../../erros/AppError";


interface IRequest{
    id:string
}
class ShowClienteService{
    public async execute({id}: IRequest): Promise<Cliente>{
    let clienteRepository  =  getCustomRepository(ClienteRepository)
    let cliente = await clienteRepository.findOne(id)
    if(!cliente){
        throw new AppError('Produto não existe')
    }
    return cliente
    }
}

export default ShowClienteService;