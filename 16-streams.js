const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', { 
    highWaterMark: 90000,
    encoding: 'utf-8'
})

//Note: there're two buffers logged in the console => 
//1- shows the total volume of the file
//2- shows the remainder of the file.


//Using this event you'll read the whole file.
//default 64KB.
//last buffer - remainder
//highWaterMark - control size
//const stream = createReadStream('./content/big.txt', { highWaterMark: 9000 })
//const stream = createReadStream('./content/big.txt', encoding: 'utf8')
stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', err => console.log(err))