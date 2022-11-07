/* importando o express */
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();

/* Em uma mesma máquina, aplicações web diferentes devem ser executadas em portas diferentes.*/
const port = 5004;

/* Configuração para leitura de parâmetros em requisição do tipo post em form */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* Habilitação de requisições partindo de outras aplicações */
app.use(cors({
    oringin: '*',
    credentials: true
})); 

import { Projeto } from "./models/model";
import {ProjetoService, PessoaService} from "./models/services"
/* Inicializando a fonte de dados via serviço: */
var projetoService = new ProjetoService();
var pessoaService = new PessoaService();

/* Criação das rotas para o serviço. */
app.get('/projetos', listProjectHandler);
app.post('/projetos', saveProjectHandler);
app.delete('/projetos/:id', excludeProjectHandler);

app.get('/pessoa', listPersonHandler);

/* Execução do servidor */
app.listen(port, listenHandler);

/* Tratadores de requisição */

/* Tratador de listagem de projetos */
async function listProjectHandler(req, res){ 
    const projetos = await projetoService.getAll();  
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(projetos));     
}

async function excludeProjectHandler(req, res){ 
    res.setHeader('Content-Type', 'application/json');
    const response = await projetoService.delete(req.params.id)
    res.end(JSON.stringify({sucess: response.affected > 0}));  
}

async function saveProjectHandler(req, res){
    res.setHeader('Content-Type', 'application/json');
    const projeto = new Projeto(req.body.id, req.body.nome, req.body.linguagem, req.body.anoInicio, req.body.anoFim);
    res.end(JSON.stringify(await projetoService.save(projeto)));  
}

/* Tratador de listagem de pessoas */
async function listPersonHandler(req, res){ 
    const pessoas = await pessoaService.getOne();  
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(pessoas));     
}

function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}