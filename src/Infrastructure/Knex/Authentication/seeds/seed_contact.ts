import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("contact").del();

    // Inserts seed entries
    await knex("contact").insert([
        {
            id: "1",
            email: "string",
            phone: "string",
            addresses_id: "1",
        }


    ]);
}
