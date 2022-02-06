const { readFile, writeFile } = require('fs').promises;
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8')
        const second = await readFile('./content/second.txt', 'utf-8')
        await writeFile('./content/result-mind-grenade.txt', `THIS IS AWESOME: ${first}, ${second}`)
        const third = await readFile('./content/result-mind-grenade.txt', 'utf-8')
        console.log(first, second, third)
    } catch(error) {
        console.log(error)
    }
}
start()
// function getText(path) {
//     return new Promise((reject, resolve) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if(err) reject(err);
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }
// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
