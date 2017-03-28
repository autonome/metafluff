var static = require('node-static'),
    servers = {};

servers['www'] = new static.Server('./site');
servers['test'] = new static.Server('./site');

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    var subdomain = request.headers.host ?
                    request.headers.host.split('.')[0] : 'www';

    if (Object.keys(servers).indexOf(subdomain) == -1)
      subdomain = 'www';

    var server = servers[subdomain];

    // Serve files!
    server.serve(request, response, function(err, result) {
      if (err) { // There was an error serving the file
        console.error("Error serving " + request.url + " - " + err.message);

        // Respond to the client
        response.writeHead(err.status, err.headers);
        response.end();
      }   
    })  
  }).resume()
}).listen(3000)
