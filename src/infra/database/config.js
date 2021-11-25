module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  database: 'iem',
  define: {
    timestamps: true,
    underscored: true,
    logging: false
  }
}