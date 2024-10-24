import Fastify from 'fastify'
import { fileURLToPath } from 'url'
import path from 'node:path'
import fs from 'node:fs'
import fastifyStatic from '@fastify/static'
import { DataBase } from './database.js'
import fastifyCookie from '@fastify/cookie'

// inicia servidor
const fastify = Fastify()

// declara constantes
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// registra arquivos estáticos
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: '',
})

fastify.register(fastifyCookie)

// funções úteis
function readFile(filePath) {
  return fs.createReadStream(path.join(__dirname, filePath))
}

// rotas para servir páginas html
fastify.get('/', () => {
  return readFile('public/index.html')
})

fastify.get('/cardapio', () => {
  return readFile('public/cardapio.html')
})

// rotas para comunicação com banco de dados
fastify.get('/database/ProdutosComuns', async (req, reply) => {
  try {
    // retorna o arquivo em cache caso exista
    await fs.promises.access('cache/ProdutosComuns.json', fs.constants.F_OK)
    return readFile('cache/ProdutosComuns.json') // TODO: tentar converter para um objeto antes de retornar
  } catch (err) {
    // caso não exista, consulta o banco de dados e faz o caching
    if (err.code === 'ENOENT') {
      const produtosComuns = await DataBase.getProdutosComuns()
      await fs.promises.writeFile(
        'cache/ProdutosComuns.json',
        JSON.stringify(produtosComuns, null, 2)
      )
      return reply.send(produtosComuns)
    }
  }
})

fastify.get('/database/CategoriasComuns', async (req, reply) => {
  try {
    // retorna o arquivo em cache caso exista
    await fs.promises.access('cache/CategoriasComuns.json', fs.constants.F_OK)
    return readFile('cache/CategoriasComuns.json')
  } catch (err) {
    // caso não exista, consulta o banco de dados e faz o caching
    if (err.code === 'ENOENT') {
      const categoriasComuns = await DataBase.getCategoriasComuns()
      await fs.promises.writeFile(
        'cache/CategoriasComuns.json',
        JSON.stringify(categoriasComuns, null, 2)
      )
      return reply.send(categoriasComuns)
    }
  }
})

fastify.get('/database/cache', async (req, reply) => {
  const produtosComuns = await DataBase.getProdutosComuns()
  const categoriasComuns = await DataBase.getCategoriasComuns()
  await fs.promises.writeFile(
    'cache/CategoriasComuns.json',
    JSON.stringify(categoriasComuns, null, 2)
  )
  await fs.promises.writeFile(
    'cache/ProdutosComuns.json',
    JSON.stringify(produtosComuns, null, 2)
  )
  reply.status(201)
})

// rotas do carrinho de compras
fastify.get('/cart', (req, reply) => {
  const cart = req.cookies.cart ? JSON.parse(req.cookies.cart) : []
  reply.send({ cart })
})

fastify.post('/cart', (req, reply) => {
  const { product_id, quantity } = req.body

  // retorna um erro caso o corpo não contenha os parâmetros esperados
  if (typeof product_id !== 'number' || typeof quantity !== 'number') {
    reply.status(400).send({ error: 'Bad Request' })
  }

  // pega o carrinho existente ou cria um novo
  let cart = req.cookies.cart ? JSON.parse(req.cookies.cart) : []

  // atualiza o item caso já esteja no carrinho
  var isNew = true
  cart = cart.map((item) => {
    if (item.product_id === product_id) {
      isNew = false
      item.quantity = quantity
      return item
    }
    return item
  })

  // adiciona o item caso ainda não esteja no carrinho
  if (isNew) {
    const newItem = { product_id, quantity }
    cart.push(newItem)
  }

  // remove itens com quantidade menor ou igual a zero
  cart = cart.filter((item) => item.quantity > 0)

  // salva o carrinho atualizado no cookie
  reply
    .setCookie('cart', JSON.stringify(cart), {
      path: '/',
      httpOnly: true,
      sameSite: 'Lax',
      secure: false,
    })
    .send({ message: 'Item added to cart', cart })
})

fastify.delete('/cart', (req, reply) => {
  reply
    .setCookie('cart', '[]', {
      path: '/',
      httpOnly: true,
      sameSite: 'Lax',
      secure: false,
    })
    .status(204)
    .send()
})

// especifica endereço e porta do servidor
fastify.listen({
  host: '0.0.0.0',
  port: process.env.PORT ?? 3333,
})
