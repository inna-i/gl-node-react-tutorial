const express = require('express');
const register = require('@react-ssr/express/register');
 
const app = express();
 
(async () => {
  // register `.jsx` or `.tsx` as a view template engine
  await register(app);
 
  app.get('/', (req, res) => {
    const user = { name: 'Inna' };
    res.render('index', { user });
  });
  
  app.get('/cats', (req, res) => {
    const items = [
        { name: 'Tom' },
        { name: 'Loki'},
        { name: 'Felix'}
    ];
    res.render('cats', { items });
  });
 
  app.listen(3000, () => {
    console.log('> Ready on http://localhost:3000');
  });
})();
