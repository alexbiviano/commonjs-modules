// importo le funzioni da names.js e hobbies.js

const fullNameFunction = require('./names')
const hobbiesFunction = require('./hobbies')

function createPerson(){
    const fullName = fullNameFunction('Mario','Rossi')
    const hobbies = hobbiesFunction('lettura', 'sport', 'palestra')
    return{
        fullName,
        hobbies
    }
}

console.log(createPerson())