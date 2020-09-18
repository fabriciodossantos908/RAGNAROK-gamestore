import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('games', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('image').notNullable();
        table.string('description').notNullable();
        table.date('released_date').notNullable();
        table.string('developer').notNullable();
        table.string('publisher').notNullable();
        table.string('player').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('games');
}