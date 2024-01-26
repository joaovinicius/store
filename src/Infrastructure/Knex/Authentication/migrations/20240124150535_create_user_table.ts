import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  
    return knex.schema
    .createTable('user', function (table) {
        table.increments('id');
        table.string('name', 255).nullable();
        table.string('email', 255).notNullable();
        table.string('username', 255).nullable();
        table.string('password', 255).notNullable();
        table.string('contact_id', 255).nullable();
        table.string('tenant_id', 255).notNullable();
        table.timestamps(true, true, true)
        table.dateTime('deletedAt').nullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
      .dropTable("user")
}

