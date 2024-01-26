import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("address").del();

    // Inserts seed entries
    await knex("address").insert([
        {
            id: "1",
            cep: "0000000",
            neighborhood: "ilaro0",
            street: "rua 000",
            number: "10",
            complement: "casa",
            country: "des",
            cityName: "bc",
            stateName: "eeee",
            stateAbbr: "ee",
        },

    ]);
}
