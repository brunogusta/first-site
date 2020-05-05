const app = require('express')();
const consign = require('consign');
const db = require('./db');

app.db = db;

consign()
  .include('./server/passport.js')
  .then('./server/middlewares.js')
  .then('./server/user.js')
  .then('./server/auth.js')
  .then('./server/routes.js')
  .into(app);

app.listen(4000, console.log('Executando...'));
