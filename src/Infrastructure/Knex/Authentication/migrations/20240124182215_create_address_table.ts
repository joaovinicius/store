import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    return knex.schema
    .createTable('address', function (table) {
        table.increments('id');
        table.string('cep', 255).notNullable();
        table.string('neighborhood', 255).notNullable();
        table.string('street', 255).notNullable();
        table.string('number', 255).notNullable();
        table.string('complement', 255).nullable();
        table.string('country', 255).nullable();
        table.string('cityName', 255).notNullable();
        table.string('stateName', 255).notNullable();
        table.string('stateAbbr', 255).notNullable();
        table.timestamps(true, true, true)
        table.dateTime('deletedAt').nullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
    .dropTable("address")
}

