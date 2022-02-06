//Starting operating system process
console.log('first')
setTimeout(() => {
    console.log('second')
}, 0)
//Note: this function has been offloaded, Despite of there is no time to be consumed(the time has been set to zero).
//... But noice that setTimeout is asynchronous function, that is all that matters.
console.log('third')
//completed and exited operating system process.