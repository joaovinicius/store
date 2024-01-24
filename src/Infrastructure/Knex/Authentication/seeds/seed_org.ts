import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("org").del();

    // Inserts seed entries
    await knex("org").insert([
        { id: "1", 
            name: "Org", 
            address_id:"1",
            admin_id: "1",
            ein: "00000000",
            company_name: "Naiara"
          },
    ]);
}
