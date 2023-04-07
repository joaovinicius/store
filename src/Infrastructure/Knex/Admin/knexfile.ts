import type { Knex } from "knex";

const CLIENT = "postgresql";
const MIGRATION_TABLE_NAME = "admin_migrations";
const USER = process.env.ADMIN_POSTGRES_USER || 'root';
const PASSWORD = process.env.ADMIN_POSTGRES_PASSWORD || 'development';
const DATABASE = process.env.ADMIN_POSTGRES_DATABASE || 'postgres';

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

module.exports = config;
