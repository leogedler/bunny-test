const { handshake } = require('../services/handshake');
const keys = require('../config/keys');


module.exports = app => {
  app.get(
    '/auth/linkedin/callback',
    (req, res) => {
      if (!req.query.error && req.query.code) {
        handshake(req.query.code, res);
      } else {
        res.json({ error: 'Error 500' });
      }
    }
  );

  app.get('/auth/linkedin/link',  (req, res) => {
      res.json({link: `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78k4fja9crqbgp&redirect_uri=${keys.redirect_uri}&state=987654321&scope=r_basicprofile`})
    }
  );
};
