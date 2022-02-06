const { readFile } = require('fs')

console.log("started a first task.")
//Check file path.
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err) return console.log("Error: ", err)
    console.log(result)
    console.log("Completed The Task.")
})
console.log("Starting another task.")