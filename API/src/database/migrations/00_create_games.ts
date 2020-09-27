import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('games', (table) => {
        table.increments('id').primary();
        table.string('name', 50).notNullable();
        table.string('image').notNullable();
        table.string('description', 500).notNullable();
        table.date('release_date').notNullable();
        table.string('developer', 30).notNullable();
        table.string('publisher', 30).notNullable();
        table.string('age_rating', 30).notNullable();
        table.string('player', 30).notNullable();
        table.integer('metacritic', 3).nullable();
        table.string('tags', 500).nullable();
        table.string('website').nullable();
        table.integer('price', 6).notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('games');
}