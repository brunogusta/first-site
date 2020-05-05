const { authSecret } = require('../.env');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');

module.exports = app => {
  const signin = async (req, res) => {
    if (!req.body.email || !req.body.password)
      return res.status(400).send('Informe usuário e senha!');

    const user = await app
      .db('users')
      .where({ email: req.body.email })
      .first();

    if (!user) res.status(400).send('Usuário não existe!');

    const isMath = bcrypt.compareSync(req.body.password, user.password);
    if (!isMath) return res.status(401).send('Email ou senha incorretos!');

    // Gerando TOKEN
    const now = Math.floor(Date.now() / 1000);

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      iat: now, //'emitido em' =  'issued at' = 'iat'
      exp: now + 60 * 60 * 24 * 3 // 60 segundos * 60 minutos = 1h * 24 = 24hs * 3 = 3d (define a expiração do token)
    };

    res.json({
      ...payload,
      token: jwt.encode(payload, authSecret)
    });
  };

  const validadeToken = async (req, res) => {
    const userData = req.body || null;
    try {
      if (userData) {
        const token = jwt.decode(userData.token, authSecret);
        if (new Date(token.exp * 1000) > new Date()) {
          return res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
          });
        }
      }
    } catch (e) {
      // problema com token
    }

    res.send(false);
  };

  return { signin, validadeToken };
};
