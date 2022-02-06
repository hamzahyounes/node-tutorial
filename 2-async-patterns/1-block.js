const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') return res.end('Home Page')
    if(req.url === '/about') {
        //BLOCKING CODE 
        for(let i = 0; i < 150; i++ ){
            for(let j = 0; j < 150; j++) {
                console.log(`${i} ${j}`)
            }
        }
        return res.end('About Page')
    }
    res.end("Hello, world")
})

server.listen(5000, () => {
    console.log('Server is listening on port: 5000')
})