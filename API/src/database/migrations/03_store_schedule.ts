import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('store_schedule', (table) => {
        table.increments('id').primary();
        // foreing key to store
        table
            .integer("store_id")
            .notNullable()
            .references("id")
            .inTable("stores")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.integer('week_day', 7).notNullable();
        table.integer('open').notNullable();
        table.integer('close').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('store_schedule');
}