import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('games_stock', (table) => {
        table.increments('id').primary();
        // foreing key to game
        table
            .integer("game_id")
            .notNullable()
            .references("id")
            .inTable("games")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        // foreing key to store
        table
            .integer("store_id")
            .notNullable()
            .references("id")
            .inTable("stores")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");

        table.integer('quantity').notNullable();
        table.date('last_update').notNullable();

    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('games_stock');
}