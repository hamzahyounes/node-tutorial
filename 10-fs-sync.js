const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(`First: ${first}`)
console.log(`Second: ${second}`)

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`)
writeFileSync('./content/result-sync.txt', `Here is the second result: ${first}, ${second}`, {flag: 'a'})
console.log(readFileSync('./content/result-sync.txt', 'utf-8'))

console.log('End')
console.log('start a new task')