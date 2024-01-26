import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    return knex.schema
    .createTable('tenant', function (table) {
        table.increments('id');
        table.string('hostname', 255).notNullable();
        table.string('dbname', 255).notNullable();
        table.string('org_id', 255).notNullable();
        table.string('branch_id', 255).notNullable();
    })

}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
    .dropTable("tenant")

}

