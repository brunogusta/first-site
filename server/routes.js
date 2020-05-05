const path = require('path');

module.exports = app => {
  app.post('/signup', app.server.user.save);
  app.post('/signin', app.server.auth.signin);
  app.post('/validadeToken', app.server.auth.validadeToken);

  app
    .route('/users')
    .all(app.server.passport.authenticate())
    .post(app.server.user.save);
};
