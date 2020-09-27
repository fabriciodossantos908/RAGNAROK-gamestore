import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('name', 50).notNullable();
        table.string('email', 100).notNullable();
        table.integer('cpf', 11).notNullable();
        table.integer('cep', 8).notNullable();
        table.integer('number_adrress', 4).notNullable();
        table.string('complement', 100).notNullable();
        table.date('birth_date').notNullable();
        
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}