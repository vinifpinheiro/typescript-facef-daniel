//importa o express e tambem importa classes para tratar erro
import express,{NextFunction, Request, Response} from 'express'
import { Server } from 'http'

//cria o servidor
// importar o arquivo de conexão com o banco de dados
import './typeorm' // acessa o arquivo index.ts

import 'express-async-errors' //Pronto para lidar com erros

let servidor = express()

//Converte dados da requisição para json
servidor.use(express.json())

//importa as rotas 
import router from './routes'
import AppError from './erros/AppError'

servidor.use(router) //servidor vai usar nossas rotas

//Classe AppError tratar o erro
servidor.use(
    (error: Error, request: Request, response: Response, next: NextFunction) =>{
        //Verifica se o erro foi lançaod pelo o AppError
        if(error instanceof AppError){
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message
            })
        }

        //Erro não foi gerado pelo AppError

        return response.status(500).json({
            status: 'error',
            message: 'Erro interno do servidor'
        })
    }
)

// servidor.get('/', function(req,res){
//     res.send('A aula acabou')
// })


//Coloca o servidor para escutar e aguardar as requisições
servidor.listen(3333,() =>{
    console.log('Servidor funcionando')
})

