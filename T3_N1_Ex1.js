/*Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep.
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent
depenent de si la Promise es resol o no.*/

const fun = r => Promise.r

let reject = () => console.log('Promise rejected');
let resolve = () => console.log('Promise resolved');

fun(reject());
fun(resolve());