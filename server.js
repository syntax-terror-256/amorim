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
    try {
        // retorna o arquivo em cache caso exista
        await fs.promises.access('cache/ProdutosComuns.json', fs.constants.F_OK)
        return readFile('cache/ProdutosComuns.json') // TODO: tentar converter para um objeto antes de retornar

    } catch (err) {
        // caso não exista, consulta o banco de dados e faz o caching
        const produtosComuns =  await DataBase.getProdutosComuns()
        console.log('comunicating to server...');
        await fs.promises.writeFile('cache/ProdutosComuns.json', JSON.stringify(produtosComuns, null, 2))
        return produtosComuns
    }
})

fastify.get('/database/CategoriasComuns', async (request, reply) => {
    try {
        // retorna o arquivo em cache caso exista
        await fs.promises.access('cache/CategoriasComuns.json', fs.constants.F_OK)
        return readFile('cache/CategoriasComuns.json')

    } catch (err) {
        console.log(err)
        // caso não exista, consulta o banco de dados e faz o caching
        const categoriasComuns =  await DataBase.getCategoriasComuns()
        console.log('comunicating to server...');
        await fs.promises.writeFile('cache/CategoriasComuns.json', JSON.stringify(categoriasComuns, null, 2))
        return categoriasComuns
    }
})

fastify.get('/database/cache', async (request, reply) => {
    const produtosComuns = await DataBase.getProdutosComuns()
    const categoriasComuns = await DataBase.getCategoriasComuns()
    await fs.promises.writeFile('cache/CategoriasComuns.json', JSON.stringify(categoriasComuns, null, 2))
    await fs.promises.writeFile('cache/ProdutosComuns.json', JSON.stringify(produtosComuns, null, 2))
    return
})


// especifica endereço e porta do servidor
fastify.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333
  })
