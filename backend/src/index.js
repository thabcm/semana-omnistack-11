const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/** Rotas e Recursos
 */

 /** Métodos HTTP:
  * GET: Buscar/listar informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação
  * DELETE: Deletar uma informação
  */

  /**
   * Tipos de parâmetros:
   * Query: Parâmetros nomeados enviados na rota após o ?name=blabla
   * Route Params: Parâmetros usados para identificar recursos :id
   * Request Body: Corpo da requisição, usado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */


app.listen(3333);