0x05. NodeJS Basics

Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

run javascript using NodeJS
use NodeJS modules
use specific Node JS module to read files
use process to access command line arguments and the environment
create a small HTTP server using Node JS
create a small HTTP server using Express JS
create advanced routes with Express JS
use ES6 with Node JS with Babel-node
use Nodemon to develop faster
Requirements
Allowed editors: vi, vim, emacs, Visual Studio Code
All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
All your files should end with a new line
A README.md file, at the root of the folder of the project, is mandatory
Your code should use the js extension
Your code will be tested using Jest and the command npm run test
Your code will be verified against lint using ESLint
Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
All of your functions/classes must be exported by using this format: module.exports = myFunction;
Provided files
database.csv
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
package.json
Click to show/hide file contents

{
  "name": "node_js_basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "./node_modules/mocha/bin/mocha --require babel-register --exit",
    "dev": "nodemon --exec babel-node --presets babel-preset-env ./server.js ./database.csv"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai-http": "^4.3.0",
    "express": "^4.17.1"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "nodemon": "^2.0.2",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "chai": "^4.2.0",
    "mocha": "^6.2.2",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}

babel.config.js
Click to show/hide file contents

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

.eslintrc.js
Click to show/hide file contents

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};

and…
Don’t forget to run $ npm install when you have the package.json

## Tasks

| Task | Topic | File |
| --- | --- | --- |
| 0 | Write output to the console | [0-console.js](./0-console.js) |
| 1 | Read input from standard input | [1-stdin.js](./1-stdin.js) |
| 2 | Read a file synchronously | [2-read_file.js](./2-read_file.js) |
| 3 | Read a file asynchronously | [3-read_file_async.js](./3-read_file_async.js) |
| 4 | Create an HTTP server | [4-http.js](./4-http.js) |
| 5 | Create an HTTP server with route handling | [5-http.js](./5-http.js) |
| 6 | Create an Express server | [6-http_express.js](./6-http_express.js) |
| 7 | Add routes with Express | [7-http_express.js](./7-http_express.js) |
| Full server | Build a student-directory Express server with controllers and routes | [server.js](./full_server/server.js), [AppController.js](./full_server/controllers/AppController.js), [StudentsController.js](./full_server/controllers/StudentsController.js), [routes/index.js](./full_server/routes/index.js), [utils.js](./full_server/utils.js) |

The numbered `*-main.js` files are exercise runners. Install this project's dependencies with `npm install`; `node_modules/` is excluded from version control.
