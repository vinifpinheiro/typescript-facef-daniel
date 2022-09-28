import { EntityRepository, Repository } from "typeorm";
import Product from "../entities/Product";


@EntityRepository(Product)
class ProductRepository extends Repository<Product>{
    //Usar metodos de CRUD
    //procura pelo nome do produto
    //método assíncrono
    public async findByName(name:string): Promise<Product | undefined>{
        //await - aguardar / esperar
        let product = await this.findOne({
            where: {
                name
            }
        })
        return product // retorno nomeado - vai retornar o product
    }
}
export default ProductRepository