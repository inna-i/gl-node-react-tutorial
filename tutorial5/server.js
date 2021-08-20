const express = require('express');
const register = require('@react-ssr/express/register');
const bodyParser = require('body-parser');

const app = express();
// to get body from req easily
app.use(bodyParser.json({ type: '*/*' }));

let catsData = require('./data/catsData');
const pages = ['dogs', 'cats', 'birds'];

(async () => {
  // register `.jsx` or `.tsx` as a view template engine
  await register(app);
 
  app.get('/', (req, res) => {
    res.render('index', { pages });
  });

  app.get('/cats', (req, res) => {
    res.render('cats', { items: catsData })
  });

  // REST API
  // handle GET
   /* can be tested with cURL
    curl --header "Content-Type: application/json" \
    --request GET http://localhost:3000/api/cats/3
  */
  app.get('/api/cats/:id', (req, res) => {
    const selectedCat = catsData.find(cat => cat.id == req.params.id);

    res.json(selectedCat);
  }); 
  
  // handle POST
  /* can be tested with cURL
    curl --header "Content-Type: application/json" \
    --request POST --data '{"name":"Jimmy","src":""}' http://localhost:3000/api/cats
  */
  app.post('/api/cats', (req, res) => {
    const body = req.body;
    catsData.push({
      id: catsData.length + 1,
      name: body.name,
      src: body.src,
    });

    res.json({ message: 'Successfuly created'});
  });

  // handle PUT
  /* can be tested with cURL
    curl --header "Content-Type: application/json" \
    --request PUT --data '{"name":"Jimmy"}' http://localhost:3000/api/cats/3
  */
  app.put('/api/cats/:id', (req, res) => {
    const body = req.body;

    catsData = catsData.map(cat => {
      if (cat.id == req.params.id) {
        return ({
          id: req.params.id,
          name: body.name || cat.name,
          src: body.src || cat.src,
        })
      }
      return cat;
    });

    res.json({ message: 'Successfuly updated'});
  });


  app.listen(3000, () => {
    console.log('> Ready on http://localhost:3000');
  });
})();
