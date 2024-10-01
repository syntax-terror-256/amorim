import Fastify from "fastify"
import { fileURLToPath } from 'url'
import path from 'node:path'
import fs from "node:fs"
import fastifyStatic from '@fastify/static'
import { DataBase } from './database.js'


// inicia servidor
const fastify = Fastify();
// const server = fastify()

// declara constantes
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// registra arquivos estáticos
fastify.register(fastifyStatic , {
    root: path.join(__dirname, 'public'),
    prefix: '',
});

// funções úteis
function readFile(filePath) {
    return fs.createReadStream(path.join(__dirname, filePath))
}

// cria rotas
fastify.get('/', () => {
    return readFile('public/index.html')
})

fastify.get('/cardapio', () => {
    return readFile('public/dynamic.html')
})

fastify.get('/database/ProdutosComuns', async (request, reply) => {
    return DataBase.getProdutosComuns()
})

fastify.get('/database/CategoriasComuns', async (request, reply) => {
    return DataBase.getCategoriasComuns()
})


// especifica endereço e porta do servidor
fastify.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333
  })
