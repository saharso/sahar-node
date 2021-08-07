const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('hello world');
        res.end();
    }
    if (req.url === '/api') {
        res.write(JSON.stringify([1, 2, 3, 4, 5]));
        res.end();
    }
});

server.listen(4040);