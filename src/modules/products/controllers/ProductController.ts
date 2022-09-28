import { Request, Response } from "express";
import CreateProductService from "../services/Product/CreateProduct";
import DeleteProductService from "../services/Product/DeleteProducetService";
import ListProductService from "../services/Product/ListProductService";
import ShowProductService from "../services/Product/ShowProductService";
import UpdateProductService from "../services/Product/UpdateProductService";
class ProductController {
    //não se trata de negócio aqui
    public async create(request:Request, response: Response): Promise<Response>{
        //Obter os dados do navegador
        let{name,quantity,price} = request.body

        //Vamos criar objeto da classe CreateProductService
        const object = new CreateProductService()
        const newProduct = await object.execute({name,quantity,price})

        //Retorna ou responder este novo produto criado em formato json
        return response.json(newProduct)
    }

    public async list(request:Request, response: Response): Promise<Response>{
        let listService = new ListProductService()
        let products = await listService.execute()
        return response.json(products)
    }


    public async show(request: Request, response: Response): Promise<Response> {
        // Recupera id do produto
        const {id} = request.params
        const showProductService = new ShowProductService
        const product = await showProductService.execute({id})
        return response.json(product)
    }

    public async delete(request: Request, response: Response): Promise<Response>{
        const {id} = request.params
        const deleteProductService = new DeleteProductService()
        await deleteProductService.execute(id)
        return response.json()
    }

    public async update(request: Request, response: Response): Promise<Response>{
        const {name,quantity,price} = request.body
        const {id} = request.params
        const updateProductService = new UpdateProductService()
        const productUpdated = await updateProductService.execute({id,name,price,quantity})
        return response.json(productUpdated)
    }
}


export default ProductController