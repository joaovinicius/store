import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    
    return knex.schema
    .createTable('branch', function (table) {
        table.increments('id');
        table.string('name', 255).notNullable();
        table.string('adress_id', 255).notNullable();
        table.string('admin_id', 255).notNullable();
        table.string('ein', 255).notNullable();
        table.string('company_name', 255).notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
    .dropTable("branch")

}

