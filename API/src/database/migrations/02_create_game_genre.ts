import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('game_genre', (table) => {
        table.increments('id').primary();
        table.boolean('action').notNullable();
        table.boolean('RPG').notNullable();
        table.boolean('shoother').notNullable();
        table.boolean('adventure').notNullable();
        table.boolean('massively_multiplayer').notNullable();

        // Foreing key to game
        table
            .integer("game_id")
            .notNullable()
            .references("id")
            .inTable("games")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");

    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('game_genre');
}