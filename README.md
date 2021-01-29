# node-logger

Node logger is a [winston](https://github.com/winstonjs/winston) based logger.

## Installation

Use the npm to install node-logger.

```bash
npm install git+https://github.com/bharavi15/node-logger.git
```

## Configuration

`node-logger` uses `logLevel` environment variable to set the desired log level for the logger
## Usage


```js
const logger = require('node-logger');
data = {randomData:"My data",awesomeData:123};
logger.error('Error occurred!');
logger.info('This is for your information');
logger.debug('Hey! Check this data '+JSON.stringify(data));
logger.silly('Some silly data= '+JSON.stringify(data));
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
