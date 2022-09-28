import { getCustomRepository } from "typeorm";
import MateriaPrimaRepository from "../../typeorm/repositories/MateriaPrima";
import AppError from "../../../../erros/AppError";

class DeleteMateriaPrima {
    public async execute(id:string) {
        const materiaprimaRepository = getCustomRepository(MateriaPrimaRepository)
        const productExist = await materiaprimaRepository.findOne(id)
        if(!productExist){
            throw new AppError('Produto não existe', 400)
        }
        await materiaprimaRepository.remove(productExist)
    }
}
export default DeleteMateriaPrima