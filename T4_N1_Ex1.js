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
        resolve(emp);
    })
    }


const getSalary = emp =>{ 
    return new Promise((resolve, reject) =>{
        const sal = salaries.find(sal => sal.id === emp.id);
        const Salary = sal.salary;
        resolve(Salary);
})
}

