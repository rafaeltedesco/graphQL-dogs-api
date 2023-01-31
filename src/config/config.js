const sequelizeConfig = {
  username: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  dialect: process.env.DBDIALECT,
};

module.exports = {
  development: sequelizeConfig,
  test: sequelizeConfig,
  production: sequelizeConfig,
};
