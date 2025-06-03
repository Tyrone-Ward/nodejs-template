# node-js-template

A barebones Node.js template project designed to help you speed up the process of building a RESTful API.

### 🚀 Main features

- [ExpressJS](http://expressjs.com) framework with [TypeScript](https://www.typescriptlang.org/) on board
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
