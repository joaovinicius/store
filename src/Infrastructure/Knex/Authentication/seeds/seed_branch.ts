import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("branch").del();

    // Inserts seed entries
    await knex("branch").insert([
        { 
            id: "1", 
            name: "loja2",
            adress_id: "1",
            admin_id: "1",
            ein: "0222222",
            company_name: "loja 02"
        
        },

    ]);
}
