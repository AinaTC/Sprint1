// Tasca 1: Entrega d'exercici: Functions & Template Literals

// Nivell 1 Ex 1
/* Crea una funció que mostri per consola el nom d'usuari
 al invocar-la passant-li el nom com a paràmetre.*/
 function ex1(UserName){
    console.log(UserName);
};

ex1("Usuari 1") 

//Nivell 2 Ex 1
/* Mostra per consola el nom i cognoms de l'usuari 
mitjançant template literals, guardant-los en variables
i referenciant-les en la impressió del missatge. */

let firstName = "NomUsuari";
let lastName = "CognomUsuari";
console.log( `${firstName} ${lastName}`);


//Nivell 2 Ex 2
//Invoca una funció que retorni un valor mitjançant template literals.
function sum(n1, n2) {
    return n1 + n2;
}
let a = 1;
let b = 2;
console.log(`Suma de ${a} i ${b} és: ${sum(a, b)}`);

// Nivell 3 Ex 1
/* Crea una matriu de deu funcions i emplena-la mitjançant un bucle 
de manera que cada funció compti del 0 al 9 per la consola. 
Invoca cada funció de l'array iterativament. 
Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.
*/


let myArray = Array.apply(null, Array(10)).map(function () {});

function ex1(){
    let i = 0;
    while (i < 10) {
        console.log(i);
        i++;
    };
};

for (let i = 0; i < 10; i++) {
    myArray[i] = ex1 ;
  };

for (let i = 0; i < myArray.length; i++) {
    myArray[i]();
  };


// En comptes de fer tots els for loops, es podria fer amb el map directament.
//let myArray = Array.apply(null, Array(10)).map(ex1);

// Nivell 3 Ex 2
/*Crea una funció anònima autoinvocable igualada a una 
variable que mostri per consola el nom de l'usuari rebut 
com a paràmetre.
 */ 
var ex2 = (function(NomUsuari){ console.log(NomUsuari); })("Usuari 3");
