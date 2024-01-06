//File to run the code to connect to our DB then export so it can be exported and used in multiple files without duplicating code

//Postgres connection
const pgp = require('pg-promise')(/* options */)
const config = require('./dev')

//Test query to ensure DB connection works
const db = pgp(config.DB_URI)

module.exports = db