import postgres from "postgres"

// usa variáveis de ambiente para pegar as informações do servidor
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env

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
})


export class DataBase {
  static async getProdutosComuns() {
    return await sql`
    SELECT * FROM ProdutosComuns
    `
  }

  static async getCategoriasComuns() {
    return await sql`
    SELECT * FROM CategoriasComuns
    `
  }
}
