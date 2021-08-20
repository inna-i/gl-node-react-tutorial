const express = require('express');
const register = require('@react-ssr/express/register');

const app = express();

const catsData = require('./data/catsData');
const pages = ['dogs', 'cats', 'birds'];

(async () => {
  // register `.jsx` or `.tsx` as a view template engine
  await register(app);
 
  app.get('/', (req, res) => {
    res.render('index', { pages });
  });
  
  app.get('/cats', (req, res) => {
    res.render('cats', { items: catsData });
  });
 
  app.listen(3000, () => {
    console.log('> Ready on http://localhost:3000');
  });
})();
