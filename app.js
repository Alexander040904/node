/* const frutas = require('./frutas') */
const {frutas, dinero} = require('./frutas')
const cowsay = require('cowsay');



frutas.forEach(item => {
    console.log(item);
    console.count(item);
    
    
})



console.log(dinero);

console.log(
    cowsay.say({
        text: "Hola bb",
        e: "oO",
        T:"U "
    })
);
