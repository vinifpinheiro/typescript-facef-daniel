import { getCustomRepository } from "typeorm";
import Cliente from "../../typeorm/entities/Cliente";
import ClienteRepository from "../../typeorm/repositories/ClienteRepository";

class ListClienteService{
    public async execute(): Promise<Cliente[]>{
        let clieteRepository = getCustomRepository(ClienteRepository)
        let clietes = await clieteRepository.find();
        return clietes
    }
}

export default ListClienteService