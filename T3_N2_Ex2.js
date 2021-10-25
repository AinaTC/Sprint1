/*
Crea una altra arrow function getSalary que rebi com a
 parametre un objecte employee i retorni el seu salari.
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


let getSalary = emp =>{
    return new Promise((resolve, reject) => {
        const salary = salaries.find(sal => sal.id === emp.id).salary;
        resolve(salary);})
}


let BG = employees.find(emp => emp.name === 'Bill Gates');
getSalary(BG).then(res => console.log(res));
let JB = employees.find(emp => emp.name === 'Jeff Bezos');
getSalary(JB).then(res => console.log(res));