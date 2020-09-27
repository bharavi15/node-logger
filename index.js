'use strict';

const winston = require('winston');

const myCustomLevels = {
  levels: {
	fatal:0,
    error: 1,
    info: 2,
    debug: 3,
    silly: 4
  },
  colors: {
    fatal: 'red',
	error: 'red',
    info: 'green',
    debug: 'yellow',
    silly: 'blue'
  }
};
winston.addColors(myCustomLevels.colors);

const customLevelLogger = winston.createLogger({
  level: process.env.logLevel || 'error',
  format: winston.format.combine( 
  winston.format.colorize({all:true}),
  winston.format.simple()
  ),
  levels: myCustomLevels.levels,
  transports: [
    new winston.transports.Console()
  ]
});
module.exports = customLevelLogger
/* customLevelLogger.error('some error level-ed message');
customLevelLogger.info('some info level-ed message');
customLevelLogger.debug('some debug level-ed message');
customLevelLogger.silly('some silly level-ed message'); */