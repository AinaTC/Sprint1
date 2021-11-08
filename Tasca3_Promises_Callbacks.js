// Tasca 3: Entrega d'exercici: Promises & Callbacks

// Nivell 1 Ex 1
/*Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep.
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent
depenent de si la Promise es resol o no.*/

const fun = r => {return new Promise((resolve,reject)=>{
    if (r>0) {resolve('I am a resolved promise!');}
    reject('you catched me!');}
 )}

fun(1).then(data=>console.log(data));
fun().catch(data=>console.log(data));

// Nivell 1 Ex 2
/*
Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció
 un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.
*/

const fun_cb = p%2;

const fun2 = (par, cb) =>  {
    p = cb(par);
    {if(p === 0){
    console.log(par+' is an even number');
    }else if (p === 1){
    console.log(par+' is an odd number');
    } else(console.log(par + ' is not a number'))
    }}

fun2(2,fun_cb);
fun2(11,fun_cb);
fun2(10,fun_cb);
fun2(5, fun_cb);
fun2('ds', fun_cb);

// Nivell 2 Ex 1
/*
Donats els objectes employees i salaries, crea una arrow function
getEmployee que retorni una Promise efectuant la cerca en l'objecte pel seu id.
*/
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];
 

let getEmployee = id => {
    return new Promise((resolve, reject) =>{
         const emp = employees.find(emp => emp.id === id);
         if(emp){ resolve(emp)}
         else {let errmsg= ('id '+id+' not found');
             reject(errmsg);
             }} )
 }

getEmployee(2).then(res =>console.log(res));

// Nivell 2 Ex 2
/*
Crea una altra arrow function getSalary que rebi com a
 parametre un objecte employee i retorni el seu salari.
*/

let getSalary = emp =>{
    return new Promise((resolve, reject) => {
        const salary = salaries.find(sal => sal.id === emp.id).salary;
         if(salary){
        resolve(salary);
        }else{let errmsg = ('no salary available for employee '+emp.name);
        reject(errmsg);
        }
        })
}


let BG = employees.find(emp => emp.name === 'Bill Gates');
getSalary(BG).then(res => console.log(res));
let JB = employees.find(emp => emp.name === 'Jeff Bezos');
getSalary(JB).then(res => console.log(res));


// Nivell 2 Ex 3 
/* 
Invoca la primera funció getEmployee
 i després getSalary niant l'execució de les dues promises.
*/

 getEmployee(1).then(res => getSalary(res).then(r=> console.log(res, r)))


// Nivell 3 Ex 1
/*
Fixa un element catch a la invocació del nivell 
anterior que capturi qualsevol error i el mostri per la consola.
*/
 
 getEmployee(2)
 .then(res => getSalary(res).then(r=> console.log(res, r)))
 .catch(err => console.log(err));
 
 
 getEmployee(11)
.then(res => getSalary(res).then(r=> console.log(res, r)))
 .catch(err => console.log(err));
