const http = require('http');
const fs = require('fs');
const path = require('path');

const hero = require('./hero');
const enemy = require('./enemy/enemy');

const hostname = '127.0.0.1';
const port = 3030;

const filePath = path.join(__dirname, 'stats.txt');

fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
        return console.error(error);
    }
    console.log(data);
});


const server = http.createServer((request, result) => {
    result.statusCode = 200;
    let text = 'Hello from my game';

    switch(request.url) {
        case '/hero/fight':
            text = hero('fight');
            fs.writeFile('hero-stats.txt', 'Hero win!', (error) => {
                if (error) return console.error('Cannot write file');
                console.log('Hero win and file created');
            });
            break;
        case '/hero/walk':
            text = hero('walk');
            break;            
        case '/enemy/walk':
            text = enemy.enemy('walk');
            break;
        case '/enemy/fight':
            text = enemy.enemy('fight');
            break;
        default: {
            text = 'hero and enemy are on respawn';
        }
    }

    result.end(text);
});

server.listen(port, hostname, () => {
    console.log(`Game server running at http://${hostname}:${port}`);
});
