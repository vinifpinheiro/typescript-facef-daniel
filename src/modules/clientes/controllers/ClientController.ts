import { Request, Response } from "express";
import CreateClienteService from "../services/Cliente/CreateCliente";
import DeleteClienteService from "../services/Cliente/DeleteCliente";
import ListClienteService from "../services/Cliente/ListCliente";
import ShowClienteService from "../services/Cliente/ShowCliente";
import UpdateClienteService from "../services/Cliente/UpdateCliente";
class ClienteController {
    
    public async create(request:Request, response: Response): Promise<Response>{
       
        let{nameClient,document,endereco} = request.body

       
        const object = new CreateClienteService()
        const newCliente = await object.execute({nameClient,document,endereco})

 
        return response.json(newCliente)
    }

    public async list(request:Request, response: Response): Promise<Response>{
        let listService = new ListClienteService()
        let cliente = await listService.execute()
        return response.json(cliente)
    }


    public async show(request: Request, response: Response): Promise<Response> {
        
        const {id} = request.params
        const showClienteService = new ShowClienteService
        const product = await showClienteService.execute({id})
        return response.json(product)
    }

    public async delete(request: Request, response: Response): Promise<Response>{
        const {id} = request.params
        const deleteClienteService = new DeleteClienteService()
        await deleteClienteService.execute(id)
        return response.json()
    }

    public async update(request: Request, response: Response): Promise<Response>{
        const {nameClient,document,endereco} = request.body
        const {id} = request.params
        const updateClienteService = new UpdateClienteService()
        const productUpdated = await updateClienteService.execute({id,nameClient,endereco,document})
        return response.json(productUpdated)
    }
}


export default ClienteController