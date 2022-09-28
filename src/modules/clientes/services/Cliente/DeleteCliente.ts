import { getCustomRepository } from "typeorm";
import ClienteRepository from "../../typeorm/repositories/ClienteRepository";
import AppError from "../../../../erros/AppError";

class DeleteClienteService {
    public async execute(id:string) {
        const clienteRepository = getCustomRepository(ClienteRepository)
        const clienteExist = await clienteRepository.findOne(id)
        if(!clienteExist){
            throw new AppError('Produto não existe', 400)
        }
        await clienteRepository.remove(clienteExist)
    }
}
export default DeleteClienteService
