const dotenv = require('dotenv')

dotenv.config({ path: 'src/config/.env' })

module.exports = {
    port: process.env.PORT,
    dbhost: process.env.POSTGRES_DBHOST,
    dbname: process.env.POSTGRES_DBNAME,
    dbport: process.env.POSTGRES_DBPORT,
    dbuser: process.env.POSTGRES_USER,
    dbpwd: process.env.POSTGRES_PASSOWRD
}