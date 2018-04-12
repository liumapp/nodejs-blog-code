/**
 * @file simple-web-server.js
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 4/12/18
 */

var http = require('http');
var serv = http.createServer(function (req , res) {
    res.writeHead(200 , {'Content-Type': 'text/html'});
    res.end('<marquee>Simple Node</marquee>');
});
serv.listen(3000);