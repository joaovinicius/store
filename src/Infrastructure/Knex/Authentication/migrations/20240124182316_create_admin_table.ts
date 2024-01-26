import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
 
    return knex.schema
    .createTable('admin', function (table) {
        table.increments('id');
        table.string('user_id', 255).notNullable();
        table.string('modulePermissions', 255).nullable();
        table.string('tenant_id', 255).notNullable();
        table.timestamps(true, true, true)
        table.dateTime('deletedAt').nullable()
    })

}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
    .dropTable("admin")
}

