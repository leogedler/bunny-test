const axios = require('axios');
var querystring = require('querystring');

const keys = require('../config/keys');

// Get access_token from linkedin
const handshake = async (code, res) => {
  const body = querystring.stringify({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: keys.redirect_uri,
    client_id: keys.client_id,
    client_secret: keys.client_secret
  });

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  try {
    const response = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', body, headers);
    res.redirect(`/profile?key=${response.data.access_token}`);

  } catch (error) {
    console.log('ERROR', error);
  }
}

module.exports = { handshake };