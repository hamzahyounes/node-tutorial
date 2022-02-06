const http = require('http');

const server = http.createServer()

//Using Event Emitter API
server.on('request', (req, res) => {
    //emits requerst event
    //subscribe to it, listen for it, respond to it.
    res.end('Welcome');
    console.log('Your server has been hit')
    //This callback function will be fired everytime someone visits your site.
})

server.listen(5000)