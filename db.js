const Pool = require('pg').Pool
const pool = new Pool({
    user: "cloud_admin",
    password: '12345',
    host: "localhost",
    port: 5432,
    database: "cloud_db"
})

module.exports = pool