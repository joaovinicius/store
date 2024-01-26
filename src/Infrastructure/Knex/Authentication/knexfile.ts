import knex, { Knex } from "knex";
import { IUser } from "src/Domain";

const CLIENT = "postgresql";
const MIGRATION_TABLE_NAME = "authentication_migrations";
const USER = process.env.AUTHENTICATION_POSTGRES_USER || 'root';
const PASSWORD = process.env.AUTHENTICATION_POSTGRES_PASSWORD || 'development';
const DATABASE = process.env.AUTHENTICATION_POSTGRES_DATABASE || 'postgres';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: CLIENT,
    connection: {
      database: DATABASE,
      user: USER,
      password: PASSWORD
    },
    migrations: {
      tableName: MIGRATION_TABLE_NAME
    },
    seeds: {
      directory: './seeds'
  }
  },
  staging: {
    client: CLIENT,
    connection: {
      database: DATABASE,
      user: USER,
      password: PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: MIGRATION_TABLE_NAME
    }
  },
  production: {
    client: CLIENT,
    connection: {
      database: DATABASE,
      user: USER,
      password: PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: MIGRATION_TABLE_NAME
    }
  }
};

export default config

export const db = knex(config.development)
