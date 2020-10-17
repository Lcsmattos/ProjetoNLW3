import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors'


import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

//rota = conjunto
//recurso = usuário

//métodos http = GET, POST, PUT, DELETE
//parametros

//get = Buscar uma Informação (Lista, Item)
//post = Criando uma informação nova

//put = Editando Uma Informação 
//delete = Deletandouma 

//query params: http://localhost:3333/users?search=lucas
//route params: http://localhost:3333/users/1 (Identificar um recurso)
//body: http://localhost:3333/users/1 (identificar um recurso)


app.listen(3333);

//Tipos de Banco de Dados
//Driver Nativo, Query builder, ORM (Object Relational Mapping)

