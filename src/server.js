const winstonLogger = require('./utils/logger');

const app = require('./app');

const { APIPORT: PORT, NODE_ENV: MODE } = process.env;

app.listen(PORT, () => {
  winstonLogger.logger.info(`${MODE} server up and running on PORT ${PORT}`);
});
