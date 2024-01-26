import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    return knex.schema
    .createTable('contact', function (table) {
        table.increments('id');
        table.string('email', 255).notNullable();
        table.string('phone', 255).notNullable();
        table.string('addresses_id', 255).notNullable();
        table.timestamps(true, true, true)
        table.dateTime('deletedAt').nullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
    .dropTable("contact")
}

