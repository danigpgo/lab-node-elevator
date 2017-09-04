const Elevator = require('./elevator.js');
const Person = require('./person.js');


let elev = new Elevator();
let pers = new Person("Dani", 4, 6);

elev.call(pers)


/* El ascensor arranca con la función call, acude a la petición,
recoge al pasajero, lo lleva hasta su piso y se para - Queda pendiente
resolver que puedan entrar más de un pasajero y que se puedan realizar
más de una llamada sin que pete - Estamos trabajando en ello. */
