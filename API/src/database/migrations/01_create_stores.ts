import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('stores', (table) => {
        table.increments('id').primary();
        table.string('name', 50).notNullable();
        table.string('uf', 2).notNullable();
        table.string('city', 30).notNullable();
        table.string('street', 100).notNullable();
        table.integer('place_number', 4).notNullable();
        table.integer('cep', 8).notNullable();

    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('stores');
}