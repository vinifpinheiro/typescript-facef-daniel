import { Router } from "express";
import ClienteController from "../controllers/ClientController";

 
const routerCliente = Router()


const controllerCliente = new ClienteController()

//está criada a rota para inserir um produto no BD
routerCliente.post('/', controllerCliente.create)

routerCliente.get('/', controllerCliente.list)

routerCliente.get('/:id', controllerCliente.show)

routerCliente.delete('/:id', controllerCliente.delete)

routerCliente.put('/:id',controllerCliente.update)


export default routerCliente