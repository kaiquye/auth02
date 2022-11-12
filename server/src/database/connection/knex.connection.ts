const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
        host : 'localhost',
        port : 5432,
        user : 'postgres',
        password : '1234',
        database : 'auth02'
    }
})

export default knex