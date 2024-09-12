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

// executa as funções apropriadas e encerra a conexão
await createDatabase()
sql.end()
