import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("org").del();

    // Inserts seed entries
    await knex("org").insert([
        { 
            id: "1", 
            name: "Naiara ltda",
            adress_id: "1",
            admin_id: "1",
            ein: "000.000/0001-54",
            company_name: "Naiara serviços"
        },

    ]);
}
