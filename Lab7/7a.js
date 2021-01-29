const http = require('http');
const url = require('url');

const URL = '127.0.0.1';
const PORT = 4000;

const server = http.createServer(function (req, res) {
    try {
        console.log(req.url);
        const parsedUrl = url.parse(req.url, true);
        const operation = parsedUrl.pathname;
        const num1 = Number(parsedUrl.query.num1);
        const num2 = Number(parsedUrl.query.num2);
        let result = 0;

        if (isNaN(num1) || isNaN(num2)) {
            res.writeHead(400, { 'Content-type': 'text/plain' });
            res.end('Parameters must be a number');
        }


        switch (operation) {
            case '/add':
                result = num1 + num2;
                break;
            case '/sub':
                result = num1 - num2;
                break;
            case '/mul':
                result = num1 * num2;
                break;
            case '/div':
                if (num2 === 0) {
                    res.writeHead(400, { 'Content-type': 'text/plain' });
                    res.end('Cannot divide by zero');
                }
                result = num1 / num2;
                break;
            default:
                res.writeHead(400, { 'Content-type': 'text/plain' });
                res.end('Not supported operation');
        }

        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.end(result + "");

    } catch (err) {
        res.writeHead(500, { 'Content-type': 'text/plain' });
        res.end(err.toString());
    }
});

server.listen(PORT, URL);
console.log('Server running at http://' + URL + ':' + PORT);
