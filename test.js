const logger = require('./index')
data = {randomData:"data",awesomeData:11}
logger.error('Error occurred!');
logger.info('This is for your information');
logger.debug('Hey! Check this data '+JSON.stringify(data));
logger.silly('Some silly data= '+JSON.stringify(data))