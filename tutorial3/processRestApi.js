const { CONTENT_TYPES } = require('./config');

function processRestApi(req, res) {
    const routes = {
        '/api/result': () => {
            res.writeHead(200, { 'Content-Type': CONTENT_TYPES['.json'] });
            res.end(JSON.stringify([
                'one', 'two', 'three', 'banana', 'apple',
            ]));
        },
        '/api/42': () => {
            res.end('42');
        }
    }

    routes[req.url]();
};

module.exports = processRestApi;
