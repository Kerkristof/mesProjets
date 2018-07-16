var createServ = function () {

    var http = require('http');

    var callback = (request, response) => {
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.write('<p>Bienvenu sur notre site</p>');
        response.end();
        console.log('Un cient vient de se connecter');
    }

    var server = http.createServer(callback);
    server.listen(3000);
};

exports.createServ = createServ;