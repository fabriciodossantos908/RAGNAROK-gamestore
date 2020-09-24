import Knex from 'knex'
import path from 'path'

// connection to the database
const db = Knex({
    client: "sqlite3",
    connection: {
        filename: path.resolve(__dirname, "database.sqlite"),
    },
    useNullAsDefault: true,
});

export default db;
