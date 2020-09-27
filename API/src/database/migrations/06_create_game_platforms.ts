import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('game_platforms', (table) => {
        table.increments('id').primary();
        table
            .integer("game_id")
            .notNullable()
            .references("id")
            .inTable("games")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .integer("platform_id")
            .notNullable()
            .references("id")
            .inTable("platforms")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");

    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('game_platforms');
}