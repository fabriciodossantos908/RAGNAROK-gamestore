import Knex from 'knex'
import path from 'path'

// connection to the database
const db = Knex({
    client: "mysql",
    connection: {
        filename: path.resolve(__dirname, "database.mysql"),
    },
    useNullAsDefault: true,
});

export default db;
