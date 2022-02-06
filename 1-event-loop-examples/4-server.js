const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello World')
})
server.listen(5000, () => {
    console.log('server is listening on port: 5000...')
})

//Note: listen function is asynchronous.
