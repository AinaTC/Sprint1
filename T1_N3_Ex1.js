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

