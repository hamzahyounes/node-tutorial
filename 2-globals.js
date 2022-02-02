//GLOBALS
// __dirname    -> path to current direction.
// __filename   -> file name.
//require   -> fuction to use modules (CommonJS).
//module    -> info about current module (file).
//process   -> info about env where the program is being excuted.

console.log(__dirname);

setInterval(() => {
    console.log('Hello World')
}, 1000)