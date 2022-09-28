import { getCustomRepository } from "typeorm"
import AppError from "../../../../erros/AppError"
import Cliente from "../../typeorm/entities/Cliente"
import ClienteRepository from "../../typeorm/repositories/ClienteRepository"


interface IRequest {
    id: string,
    nameClient: string,
    document: string,
    endereco: string
}

class UpdateClienteService{
    public async execute({id,nameClient,document,endereco}: IRequest):Promise<Cliente>{
        const clienteRepository = getCustomRepository(ClienteRepository)
        const clienteExist = await clienteRepository.findOne(id)
        if(!clienteExist){
            throw new AppError('Produto não existe', 400)
        }
        //Verifica se o nome alterado já existe no BD
        const nameClientExist = await clienteRepository.findByName(nameClient)
        if(nameClientExist){
            throw new AppError('Nome do Produto já existe',400)
        }

        clienteExist.nameClient = nameClient
        clienteExist.document = document
        clienteExist.endereco = endereco
        await clienteRepository.save(clienteExist) 
        return clienteExist
    }
}

export default UpdateClienteService