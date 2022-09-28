import { EntityRepository, Repository } from "typeorm";
import MateriaPrima from "../entities/MateriaPrima";


@EntityRepository(MateriaPrima)
class MateriaPrimaRepository extends Repository<MateriaPrima>{
    
    public async findByName(name:string): Promise<MateriaPrima | undefined>{
        
        let materiaprima = await this.findOne({
            where: {
                name
            }
        })
        return materiaprima 
    }
}
export default MateriaPrimaRepository