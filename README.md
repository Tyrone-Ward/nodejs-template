# node-js-template

A barebones Node.js template project designed to help you speed up the process of building a RESTful API.

### 🚀 Main features

- [ExpressJS](http://expressjs.com) framework
- Built-in API documentation the at the `/api-docs` endpoint
- Simple and universal logging with support for multiple storage devices

## 📁 Project Structure

```sh
├── env.example
├── index.js
├── package.json
├── README.md
└── src
    ├── config
    │   └── index.js
    ├── controllers
    │   └── index.js
    ├── middlewares
    │   ├── errorHandler.js
    │   └── httpLpgger.js
    ├── routes
    │   └── rootRoutes.js
    └── utils
        ├── AppError.js
        └── logger.js

7 directories, 11 files
```

## 🛠️ Getting Started

Make sure you have [Node.js](http://nodejs.org/) and [nodemon](https://www.npmjs.com/package/nodemon) installed.

```sh
$ git clone https://github.com/Tyrone-Ward/nodejs-template.git
$ cd nodejs-template
$ npm install
$ npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Logging

```javascript
import logger from '@utils/logger'

logger.error('message') // level 0
logger.warn('message') // level 1
logger.info('message') // level 2
logger.http('message') // level 3
logger.debug('message') // level 4
```

In development mode, log messages of all severity levels will be printed to the console. In production mode, only `info`, `warn`, and `error` logs
will be printed to the console. Also, error logs are stored in the `/logs` directory and rotated every 7 days.

Note: API request information (request url, response code, timestamp, etc.) are also automatically logged (using
[morgan](https://github.com/expressjs/morgan)).

## SwaggerUI

[Interactive API documentation](https://swagger.io/) can be accessed at the path: `api-docs/` For local development use this:
http://localhost:3000/api-docs \
Just write JSDoc-annotated source code and it will automatically generate an OpenAPI (Swagger) documentation. \
Important: swaggerUI is disabled for the production env

```javascript
/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.get('/', (req, res) => {
    res.send('Hello World!')
})
```
