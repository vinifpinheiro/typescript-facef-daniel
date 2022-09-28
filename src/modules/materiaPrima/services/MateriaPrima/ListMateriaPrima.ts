import { getCustomRepository } from "typeorm";
import MateriaPrima from "../../typeorm/entities/MateriaPrima";
import MateriaPrimaRepository from "../../typeorm/repositories/MateriaPrima";

class ListMateriaPrima{
    public async execute(): Promise<MateriaPrima[]>{
        let materiaprimaRepository = getCustomRepository(MateriaPrimaRepository)
        let materiasPrimas = await materiaprimaRepository.find();
        return materiasPrimas
    }
}

export default ListMateriaPrima