

import { getCustomRepository } from "typeorm";
import Cliente from "../../typeorm/entities/Cliente";
import ClienteRepository from "../../typeorm/repositories/ClienteRepository";
import AppError from "../../../../erros/AppError";


interface IRequest{
    nameClient:string;
    document:string;
    endereco: string;
}


class CreateClienteService{

    public async execute({nameClient,document,endereco}: IRequest):Promise<Cliente>{

        const clienteRepository = getCustomRepository(ClienteRepository)
        const clienteExist = await clienteRepository.findByName(nameClient)

        if(clienteExist){

            throw new AppError('Já existe um produto com este nome')
        }


        const novo = clienteRepository.create({
            nameClient, document, endereco
        })


        await clienteRepository.save(novo)
        return novo
    }  
}

export default CreateClienteService