//require('dotenv').config();
const Pool = require("pg").Pool;
const pool = new Pool({
  user: 'moveapp_user',
  host: 'dpg-ck5ub4os0i2c73ak8c30-a.oregon-postgres.render.com',
  database: 'moveapp',
  password: 'r5zGM01GvccMwwBvgVr1GdG2c22dv5DD!',
  port: 5432,

  ssl: true,
  synchronize: true,
  extra: {
    trustServerCertificate: true,
  },
});

module.exports = pool;