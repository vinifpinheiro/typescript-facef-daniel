import { Request, Response } from "express";
import CreateMateriaPrima from "../services/MateriaPrima/CreateMateriaPrima";
import DeleteMateriaPrima from "../services/MateriaPrima/DeleteMateriaPrima";
import ListMateriaPrima from "../services/MateriaPrima/ListMateriaPrima";
import ShowMateriaPrima from "../services/MateriaPrima/ShowMateriaPrima";
import UpdateMateriaPrima from "../services/MateriaPrima/UpdateMateriaPrima";
class MateriaPrimaController {

    public async create(request:Request, response: Response): Promise<Response>{
        
        let{name,quantity,price,tipo} = request.body

        
        const object = new CreateMateriaPrima()
        const newMateriaPrima = await object.execute({name,quantity,price,tipo})

        
        return response.json(newMateriaPrima)
    }

    public async list(request:Request, response: Response): Promise<Response>{
        let listService = new ListMateriaPrima()
        let MateriaPrimas = await listService.execute()
        return response.json(MateriaPrimas)
    }


    public async show(request: Request, response: Response): Promise<Response> {
        // Recupera id do produto
        const {id} = request.params
        const showMateriaPrimaService = new ShowMateriaPrima
        const MateriaPrima = await showMateriaPrimaService.execute({id})
        return response.json(MateriaPrima)
    }

    public async delete(request: Request, response: Response): Promise<Response>{
        const {id} = request.params
        const deleteMateriaPrimaService = new DeleteMateriaPrima()
        await deleteMateriaPrimaService.execute(id)
        return response.json()
    }

    public async update(request: Request, response: Response): Promise<Response>{
        const {name,quantity,price,tipo} = request.body
        const {id} = request.params
        const updateMateriaPrimaService = new UpdateMateriaPrima()
        const MateriaPrimaUpdated = await updateMateriaPrimaService.execute({id,name,price,quantity,tipo})
        return response.json(MateriaPrimaUpdated)
    }
}


export default MateriaPrimaController