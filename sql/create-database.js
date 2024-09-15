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
    'Tortas Salgadas', 'Mini Delícias', 'Doces', 
    'Salgados Assados', 'Salgados Tradicionais', 'Salgados Especiais', 'Entradas e Petiscos'
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
  VALUES('Camarão Empanado', 6, 300,00, 100, 100)
  `
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES('Patinha Empanada', 6, 300,00, 100, 100)
  `
}


// executa as funções apropriadas e encerra a conexão
await createDatabase()
await fillCategoriasComuns()
sql.end()
