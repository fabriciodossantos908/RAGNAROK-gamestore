import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('stores', (table) => {
        table.increments('id').primary;
        table.string('name').notNullable();
        table.string('address').notNullable();
        table.integer('cep').notNullable();

    })
}

export default function down(knex: Knex) {
    return knex.schema.dropTable('stores');
}