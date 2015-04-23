var map = require('through2-map')
var http = require('http')
http.createServer(function(inStream, outStream) {
    if(inStream.method == 'POST') {
        inStream.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(outStream)
    }
}).listen(process.argv[2]);
