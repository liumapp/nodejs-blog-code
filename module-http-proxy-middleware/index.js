/** 
 * @file index.js 
 * @author liumapp 
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com 
 * @date 4/13/18 
 */

// include dependencies
var express = require('express');
var proxy = require('http-proxy-middleware');

// proxy middleware options
var options = {
    target: 'http://www.example.org', // target host
    changeOrigin: true,               // needed for virtual hosted sites
    ws: true,                         // proxy websockets
    pathRewrite: {
        '^/api/old-path' : '/api/new-path',     // rewrite path
        '^/api/remove/path' : '/path'           // remove base path
    },
    router: {
        // when request.headers.host == 'dev.localhost:3000',
        // override target 'http://www.example.org' to 'http://localhost:8000'
        'dev.localhost:3000' : 'http://localhost:8000'
    }
};

// create the proxy (without context)
var exampleProxy = proxy(options);

// mount `exampleProxy` in web server
var app = express();
app.use('/api', exampleProxy);
app.listen(3000);