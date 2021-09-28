var fs = require('fs');
var PeerServer = require('peer').PeerServer;
console.log('test');
var server = PeerServer({
    port: 9000,
    path: '/peerjs',
    ssl: {
        key: fs.readFileSync('./../certificates/key.pem', 'utf8'),
        cert: fs.readFileSync('./../certificates/cert.pem', 'utf8')
    }
});