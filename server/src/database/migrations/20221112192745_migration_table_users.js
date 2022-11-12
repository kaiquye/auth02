/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.uuid('id').defaultTo(knex.raw('gen_random_uuid()'))
    table.string('fist_name', 235).notNullable()
    table.string('last_name', 235).notNullable()
    table.string('email', 255).notNullable()
    table.string('password').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

}
