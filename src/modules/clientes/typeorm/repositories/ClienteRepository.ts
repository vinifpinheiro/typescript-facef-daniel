import { EntityRepository, Repository } from "typeorm";
import Cliente from "../entities/Cliente";


@EntityRepository(Cliente)
class ClienteRepository extends Repository<Cliente>{
    
    public async findByName(name:string): Promise<Cliente | undefined>{
        
        let cliente = await this.findOne({
            where: {
                name
            }
        })
        return cliente 
    }
}
export default ClienteRepository