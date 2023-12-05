module.exports = {
    development: {
      username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_NAME || 'restaurant_db',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
      },
    };