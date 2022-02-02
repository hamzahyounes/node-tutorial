//CommonJS, every file is a Module (by default)
//Modules - Encapsulted Code (only share minimum)

//We use this 'require' function in order to import from another module.
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
sayHi(names.ahmad)
sayHi(names.omima)
sayHi(names.adam)