//Note: require('events') returns a class -> So, we used the Pascal Case notation 
//get back the class.
//if you want custom -> extend the class
//otherwise just for emitting and handling events -> create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter();
//on, emit methods.
//keep track of the order
//additional arguments.
//Built-in modules utilize it.

//Note: This order matters.. 
//At first we listen for the event, then we emit it.
//When you emit an event you can pass some arguments that you may need as data.
customEmitter.on('response', (name, id) => {
    console.log(`Data Received: ${name} with id: ${id}`)
}) //=> You pass the name of your event and the callback function that you want to fire when this event is emitted.
customEmitter.on('response', () => {
    console.log(`some other log here`)
})

customEmitter.emit('response', 'Hamza', 25)