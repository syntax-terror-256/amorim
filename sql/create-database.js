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
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES ('Empada de Frango', 4, 200.00, 100, 100)
  `

  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES ('Mini Quiches', 4, 300.00, 100, 100)
  `

  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES ('Mini Esfirras', 4, 300.00, 100, 100)
  `

  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES ('Cartucho de Camarão', 4, 180.00, 100, 100)
  `

  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES ('Cartucho de Frango', 4, 150.00, 100, 100)
  `

  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES ('Pastel Húngaro', 4, 200.00, 100, 100)
  `
}

async function fillSalgadosTradicionais() {
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES ('Coxinha de Frango', 5, 150.00, 100, 100)
  `

  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES ('Risoles de Carne', 5, 150.00, 100, 100)
  `

  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES ('Bolinho de Pizza', 5, 150.00, 100, 100)
  `

  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES ('Croquete de Camarão', 5, 150.00, 100, 100)
  `

  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES ('Kibe', 5, 150.00, 100, 100)
  `
}

// preencher dados tortas salgadas
async function fillTortasSalgadas() {
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima) 
  VALUES('Empadão de Frango M', 1, 100.00, 1, 1)
  `
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima) 
  VALUES('Empadão de Frango G', 1, 150.00, 1, 1)
  `
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima) 
  VALUES('Empadão de Camarão', 1, 200.00, 1, 1)
  `
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima) 
  VALUES('Quiche de carne de sol', 1, 180.00, 1, 1)
  `
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima) 
  VALUES('Quiche de Queijo', 1, 180.00, 1, 1)
  `
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima) 
  VALUES('Pão de Metro frango', 1, 180.00, 1, 1)
  `
}

//preencher dados doces Tradicionais
async function fillDocesTradicionais(){
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES('Brigadeiro', 3, 180.00, 100, 100)
  `
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES('Beijinho', 3, 180.00, 100, 100)
  `
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES('Casadinho', 3, 180.00, 100, 100)
  `
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES('Ninho', 3, 180.00, 100, 100)
  `
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES('Churros', 3, 180.00, 100, 100)
  `
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES('Surpersa de Uva', 3, 180.00, 100, 100)
  `
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES('Romeu e Julieta', 3, 180.00, 100, 100)
  `
}

//preencher dados doces especiais
async function fillDocesEspeciais(){
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES('Ninho + Nutella', 3, 230.00, 100, 100)
  `
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES('Olho de sogra (ameixa)', 3, 230.00, 100, 100)
  `
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES('Ouriço (coco queimado)', 3, 230.00, 100, 100)
  `
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES('Ninho + Oreo', 3, 230.00, 100, 100)
  `
}

//salgados especiais
  async function fillSagadosEspeciais(){
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES('Camarão Empanado', 6, 300.00, 100, 100)
  `
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES('Patinha Empanada', 6, 300.00, 100, 100)
  `
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
await fillMiniDelicias()
// await fillSagadosEspeciais()
// await fillSalgadosAssados()
// await fillSalgadosTradicionais()
// await fillTortasSalgadas()
// console.log(await getProdutosComuns())
// console.log(await getCategoriasComuns())

sql.end()
