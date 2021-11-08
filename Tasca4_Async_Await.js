// Tasca 4: Entrega d'exercici: Async / Await

// Nivell 1 Ex 1
/*
Donats els objectes employees i salaries, crea una arrow 
function getEmployee que retorni una Promise efectuant la 
cerca en l'objecte pel seu id. Crea una altra arrow function 
getSalary que rebi com a paràmetre un objecte employee i retorni
 el seu salari.
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

const getEmployee = id =>{
    return new Promise((resolve, reject) =>{
        const emp = employees.find(emp => emp.id === id);
     if(emp){ 
     resolve(emp);
     }else {let errmsg= ('id '+id+' not found');
            reject(errmsg);
           }
    })
    }


const getSalary = emp =>{ 
    return new Promise((resolve, reject) =>{
        const sal = salaries.find(sal => sal.id === emp.id);
        if (sal) {   
        const Salary = sal.salary;
        resolve(Salary);
        }else{ let errmsg = ('no salary available for employee '+emp.name);
        reject(errmsg);
             }
})
}


// Nivell 1 Ex 2
/*
Crea una funció asíncrona que rebi un id d'empleat i
imprimeixi per pantalla el nom de l'empleat i el seu salari, 
usant les funcions que has definit a l'exercici anterior.
*/

async function getNameAndSalary (id){
    const empl = await getEmployee(id);
    const salari = await getSalary(empl);
    console.log(empl.name, salari);
}

getNameAndSalary(1);
getNameAndSalary(2);
getNameAndSalary(3);

// Nivell 2 Ex 1
/*
Crea una nova funció asíncrona que cridi a una altra que retorni 
una Promise que efectuï la seva funció resolve() després de 
2 segons de la seva invocació.
*/


let promFun = () => {
    new Promise((resolve, reject) =>{ 
        setTimeout(() => resolve(console.log('Promesa resolta')), 2000);
    })
}

async function asynFun(){
    await promFun();
}

asynFun();

// Nivell 3 Ex 1
/*
Captura tots els errors possibles dels nivells 1 i 2.
*/

async function getNameAndSalary_catch (id){
    try{
        const empl = await getEmployee(id);
        const salari = await getSalary(empl);
        console.log(empl.name, salari);
    } catch(err){
        console.log(err);
}}

getNameAndSalary_catch(1);
getNameAndSalary_catch(10);
getNameAndSalary_catch('A');

async function asynFun_catch(){
    try{
        await promFun();
    } catch(err) {
        console.log(err);
    }
}


asynFun_catch();
