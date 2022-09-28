import { Router } from "express";
import ProductController from "../controllers/ProductController";
import Product from "../typeorm/entities/Product";

// cria objeto para a rota 
const routerProduct = Router()

//Cria um objeto controller
const controllerProduct = new ProductController()

//está criada a rota para inserir um produto no BD
routerProduct.post('/', controllerProduct.create)

routerProduct.get('/', controllerProduct.list)

routerProduct.get('/:id', controllerProduct.show)

routerProduct.delete('/:id', controllerProduct.delete)

routerProduct.put('/:id',controllerProduct.update)


export default routerProduct