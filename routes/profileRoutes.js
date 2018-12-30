const axios = require('axios');

module.exports = app => {

  app.get('/api/torre/:torreId', async (req, res) => {
    const { torreId } = req.params;
    try {
      const response = await axios.get(`https://torre.bio/api/bios/${torreId}`);
      res.json(response.data);
    } catch (error) {
      res.status(500);
    }
  });

  app.get('/api/linkedin/:key', async (req, res) => {
    const { key } = req.params;
    const headersObj = {
      headers: {
        'Authorization': `Bearer ${key}`
      }
    };
    try {
      const response = await axios.get(`https://api.linkedin.com/v1/people/~:(id,first-name,last-name,headline,picture-url,location,industry,current-share,num-connections,summary,specialties,positions)?format=json`, headersObj);
      res.json(response.data); 
    } catch (error) {
      res.status(500);
    }

  });


};
