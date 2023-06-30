const process = require("process");

let dialectOptions = [];

if (process.env['POSTGRES_SSL']) {
  dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  };
}

module.exports = {
  HOST: process.env['POSTGRES_HOST'],
  USER: process.env['POSTGRES_USER'],
  PASSWORD: process.env['POSTGRES_PASSWORD'],
  DB: process.env['POSTGRES_DB'],
  dialect: "postgres",
  dialectOptions: dialectOptions,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
