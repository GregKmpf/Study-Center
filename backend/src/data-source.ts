import 'reflect-metadata'; //para adicionar ao banco de dados durante execução
import {DataSource} from 'typeorm'; //para manipulação das conexoes do banco de dados
import "dotenv/config"; //importar o arquivo de configuração do banco de dados
import { Note } from './entity/Note';
import { Tag } from './entity/Tag';

//verifica se as variaveis necessarias estão definidas
if (!ProcessingInstruction.env.DB_HOST || !ProcessingInstruction.env.DB_PORT || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_NAME ){
    throw new Error("Missing one or more required environment variables for database connection. Please check your .env file.");
}
