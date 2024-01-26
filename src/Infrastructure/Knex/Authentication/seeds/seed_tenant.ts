import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("tenant").del();

    // Inserts seed entries
    await knex("tenant").insert([
        { 
            id: "1", 
            hostname: "localhost",
            dbname: "banco 1",
            org_id: "1",
            branch_id: "1"
        },

    ]);
}
