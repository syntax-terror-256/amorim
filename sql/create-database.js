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

// inserir dados de mini delícias
async function fillMiniDelicias() {
  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES ('Mini Burguer', 2, 6.00, 1, 20)
  `

  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES ('Mini Hot Dog', 2, 5.00, 1, 20)
  `

  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES ('Mini Pizza', 2, 4.00, 1, 20)
  `

  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES ('Mini Burguer Especial', 2, 7.00, 1, 20)
  `

  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES ('Mini Caprese', 2, 6.00, 1, 20)
  `

  await sql`
  INSERT INTO ProdutosComuns(nome, categoria_id, custo, base_de_calculo, quantidade_minima)
  VALUES ('Mini Pãozinho Delícia', 2, 5.00, 1, 20)
  `
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

// executa as funções apropriadas e encerra a conexão
await createDatabase()
await fillCategoriasComuns()
sql.end()
