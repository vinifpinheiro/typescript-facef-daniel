import { Router } from "express";
import MateriaPrimaController from "../controllers/MateriaPrimaController";


// cria objeto para a rota 
const routerMateriaPrima = Router()

//Cria um objeto controller
const controllerMateriaPrima = new MateriaPrimaController()

//está criada a rota para inserir um produto no BD
routerMateriaPrima.post('/', controllerMateriaPrima.create)

routerMateriaPrima.get('/', controllerMateriaPrima.list)

routerMateriaPrima.get('/:id', controllerMateriaPrima.show)

routerMateriaPrima.delete('/:id', controllerMateriaPrima.delete)

routerMateriaPrima.put('/:id',controllerMateriaPrima.update)


export default routerMateriaPrima