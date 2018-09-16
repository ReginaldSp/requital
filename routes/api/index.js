const express = require('express');

const apiRouter = express.Router();

const getLocations = (req, res) => {
  console.log('fuck')
  res.sendFile(process.cwd() + '/data/locations.json');
}

apiRouter.get('/locations', getLocations);
apiRouter.get('/some', (req, res) => {
  console.log('fuckasdasd')
  res.send({some: 'some'})
});

apiRouter.post('/somes', (req, res) => {
  console.log('asaaaas')
  res.send({some: 'some1'})
});

module.exports = apiRouter;
