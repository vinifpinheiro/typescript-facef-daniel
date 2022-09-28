import {createConnection, SimpleConsoleLogger} from "typeorm"


//cria a conexão com o BD
createConnection()

console.log('Conectado com sucesso')