import knex from 'knex'

export const knexConnection = knex({
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