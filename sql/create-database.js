import postgres from "postgres"

// usa variáveis de ambiente para pegar as informações do servidor
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

// cria um objeto para se comunicar com o banco de dados
export const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: 'require',
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

// placeholders para inserção no banco de dados
const imagem = "https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg"
const info = "Ingredientes principais: farinha, açúcar, manteiga e ovos."


// cria as tabelas do banco de dados
async function createDatabase() {
  await sql`
  CREATE TABLE IF NOT EXISTS CategoriasComuns (
    categoria_id SERIAL PRIMARY KEY,
    nome VARCHAR(25) NOT NULL UNIQUE
  )
  `

  await sql`
  CREATE TABLE IF NOT EXISTS ProdutosComuns (
    produto_id SERIAL PRIMARY KEY,
    nome VARCHAR(25) NOT NULL UNIQUE,
    imagem VARCHAR(255) NOT NULL,
    categoria_id INT,
    info VARCHAR(70),
    custo FLOAT NOT NULL,
    base_de_calculo INT NOT NULL,
    quantidade_minima INT NOT NULL
  )
  `
}

// insere todos os valores da tabela CategoriasComuns
async function fillCategoriasComuns() {
  const categorias = [
    'Tortas Salgadas', 'Mini Delícias', 'Doces Tradicionais', 'Doces Especiais', 
    'Salgados Assados', 'Salgados Tradicionais', 'Salgados Especiais'
  ]

  // inicia uma transação com o banco de dados
  sql.begin(async (sql) => {
    // faz uma inserção para cada valor na lista 'categorias'
    for (const categoria of categorias) {
      await sql`
      INSERT INTO CategoriasComuns (nome)
      VALUES (${categoria})
      `
    }

    console.log('Categorias inseridas com sucesso!')
  })
}

// insere na tabela ProdutosComuns uma lista de registros relacionados a uma dada categoria
async function fillCategoria(registros, categoria) {
  // valores deve ser uma lista de listas ordenadas em nome, imagem, info, custo, base_de_calculo, quantidade_minima
  // retorna o id correspondente à categoria
  const response = await sql`
  SELECT * FROM CategoriasComuns
  WHERE nome LIKE ${categoria}
  `
  const categoria_id = response[0].categoria_id

  // inicia uma transação e insere cada um dos valores com a categoria especificada
  sql.begin(async (sql) => {
    for (const registro of registros) {
      // unpacking dos valores da lista
      const [nome, imagem, info, custo, base_de_calculo, quantidade_minima] = registro
      
      // insere os valores de acordo com o registro
      await sql`
      INSERT INTO ProdutosComuns(nome, imagem, categoria_id, info, custo, base_de_calculo, quantidade_minima)
      VALUES (${nome}, ${imagem}, ${categoria_id}, ${info}, ${custo}, ${base_de_calculo}, ${quantidade_minima})
      `
    }
    console.log(`Registros da categoria ${categoria} inseridos com sucesso`)
  })
}

// inserir dados de mini delícias
async function fillMiniDelicias() {
  const registros = [
    ['Mini Burguer', imagem, info, 6.00, 1, 20],
    ['Mini Hot Dog', imagem, info, 5.00, 1, 20],
    ['Mini Pizza', imagem, info, 4.00, 1, 20],
    ['Mini Burguer Especial', imagem, info, 7.00, 1, 20],
    ['Mini Caprese', imagem, info, 6.00, 1, 20],
    ['Mini Pãozinho Delícia', imagem, info, 5.00, 1, 20]
  ]

  await fillCategoria(registros, 'Mini Delícias')
}

// inserir dados de salgado assado
async function fillSalgadosAssados() {
  const registros = [
    ['Empada de Frango', imagem, info, 200.00, 100, 100],
    ['Mini Quiches', imagem, info, 300.00, 100, 100],
    ['Mini Esfirras', imagem, info, 300.00, 100, 100],
    ['Cartucho de Camarão', imagem, info, 180.00, 100, 100],
    ['Cartucho de Frango', imagem, info, 150.00, 100, 100],
    ['Pastel Húngaro', imagem, info, 200.00, 100, 100]
  ]

  await fillCategoria(registros, 'Salgados Assados')
}

async function fillSalgadosTradicionais() {
  const registros = [
    ['Coxinha de Frango', imagem, info, 150.00, 100, 100],
    ['Risoles de Carne', imagem, info, 150.00, 100, 100],
    ['Bolinho de Pizza', imagem, info, 150.00, 100, 100],
    ['Croquete de Camarão', imagem, info, 150.00, 100, 100],
    ['Kibe', imagem, info, 150.00, 100, 100]
  ]
  
  await fillCategoria(registros, 'Salgados Tradicionais')
}

// preencher dados tortas salgadas
async function fillTortasSalgadas() {
  const registros = [
    ['Empadão de Frango M', imagem, info, 100.00, 1, 1],
    ['Empadão de Frango G', imagem, info, 150.00, 1, 1],
    ['Empadão de Camarão', imagem, info, 200.00, 1, 1],
    ['Quiche de Carne de Sol', imagem, info, 180.00, 1, 1],
    ['Quiche de Queijo', imagem, info, 180.00, 1, 1],
    ['Pão de Metro frango', imagem, info, 180.00, 1, 1]
  ]
  
  await fillCategoria(registros, 'Tortas Salgadas')
}

//preencher dados doces Tradicionais
async function fillDocesTradicionais(){
  const registros = [
    ['Brigadeiro', imagem, info, 180.00, 100, 100],
    ['Beijinho', imagem, info, 180.00, 100, 100],
    ['Casadinho', imagem, info, 180.00, 100, 100],
    ['Ninho', imagem, info, 180.00, 100, 100],
    ['Churros', imagem, info, 180.00, 100, 100],
    ['Surpresa de Uva', imagem, info, 180.00, 100, 100],
    ['Romeu e Julieta', imagem, info, 180.00, 100, 100]
  ]

  await fillCategoria(registros, 'Doces Tradicionais')
}

//preencher dados doces especiais
async function fillDocesEspeciais(){
  const registros = [
    ['Ninho + Nutella', imagem, info, 230.00, 100, 100],
    ['Olho de sogra (ameixa)', imagem, info, 230.00, 100, 100],
    ['Ouriço (coco queimado)', imagem, info, 230.00, 100, 100],
    ['Ninho + Oreo', imagem, info, 230.00, 100, 100]
  ]

  await fillCategoria(registros, 'Doces Especiais')
}

//salgados especiais
async function fillSagadosEspeciais(){
  const registros = [
    ['Camarão Empanado', imagem, info, 300.00, 100, 100],
    ['Patinha Empanada', imagem, info, 300.00, 100, 100]
  ]

  await fillCategoria(registros, 'Doces Especiais')
}

async function getCategoriasComuns() {
  return await sql`
  SELECT * FROM CategoriasComuns
  `
}

async function getProdutosComuns() {
  return await sql`
  SELECT * FROM ProdutosComuns
  `
}


// executa as funções apropriadas e encerra a conexão
// await createDatabase()
// await fillCategoriasComuns()
// await fillDocesEspeciais()
// await fillDocesTradicionais()
// await fillMiniDelicias()
await fillSagadosEspeciais()
await fillSalgadosAssados()
await fillSalgadosTradicionais()
await fillTortasSalgadas()
// console.log(await getProdutosComuns())
// console.log(await getCategoriasComuns())

sql.end()
