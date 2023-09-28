//require('dotenv').config();
const Pool = require("pg").Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'API',
  password: 'Letsdoit!',
  port: 5433,
});

module.exports = pool;