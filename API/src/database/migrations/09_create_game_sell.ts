import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('game_sell', (table) => {
        table.increments('id').primary();
        table.integer('quantity').notNullable();
        table
            .integer("game_id")
            .notNullable()
            .references("id")
            .inTable("games")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");

    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('game_sell');
}