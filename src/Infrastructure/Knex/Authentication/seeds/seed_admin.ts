import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("admin").del();

    // Inserts seed entries
    await knex("admin").insert([
        { 
            id: "1", 
            user_id: "1",
            modulePermissions: "true",
            tenant_id: "1"
        }
    ]);
}
