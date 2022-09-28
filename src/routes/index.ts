import { Router } from "express";
import routerCliente from "../modules/clientes/routes/routes.cliente";
import routerMateriaPrima from "../modules/materiaPrima/routes/routes.materiaPrima";
import routerProduct from "../modules/products/routes/routes.product";

const router = Router()

//quem responde a rota /product é routerProduct
router.use('/product', routerProduct)
router.use('/materiaprima' , routerMateriaPrima)
router.use('/materiaprima' , routerCliente) 



export default router