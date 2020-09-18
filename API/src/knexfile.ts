import path from 'path'

module.exports = {
    client: "mysql",
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.mysql')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true
}